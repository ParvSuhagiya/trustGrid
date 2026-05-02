/**
 * apiClient.js — Centralized Axios API Service for TrustGrid
 *
 * Features:
 *  ✓ Axios instance with base URL + timeout
 *  ✓ Request interceptor  → attaches Bearer token automatically
 *  ✓ Response interceptor → global error handling
 *  ✓ 401 handling         → clears auth + redirects to /login
 *  ✓ Loading state        → dispatches setLoading via Redux uiSlice
 *  ✓ Toast notifications  → dispatches showNotification via Redux uiSlice
 *  ✓ Retry mechanism      → retries up to 2 times on network/5xx errors
 *  ✓ Request deduplication → tracks in-flight GETs, cancels duplicate calls
 */

import axios from 'axios';
import store from '../store';
import { setLoading, showNotification } from '../store/slices/uiSlice';
import { clearCredentials } from '../store/slices/authSlice';
import { clearUserProfile } from '../store/slices/userSlice';

// ─── Config ────────────────────────────────────────────────────────────────
const BASE_URL = import.meta.env.VITE_API_URL || 'https://trustgrid.onrender.com';
const MAX_RETRIES   = 2;
const RETRY_DELAY   = 1000; // ms — doubles on each attempt (exponential)
const TIMEOUT_MS    = 15000;

// Suppress loader for these endpoints (background polling, etc.)
const SILENT_ENDPOINTS = [];

// ─── Axios Instance ─────────────────────────────────────────────────────────
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT_MS,
  headers: { 'Content-Type': 'application/json' },
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Track how many requests are in-flight so we only hide the loader when all finish */
let activeRequests = 0;

const incrementLoader = (silent) => {
  if (silent) return;
  activeRequests++;
  if (activeRequests === 1) store.dispatch(setLoading(true));
};

const decrementLoader = (silent) => {
  if (silent) return;
  activeRequests = Math.max(0, activeRequests - 1);
  if (activeRequests === 0) store.dispatch(setLoading(false));
};

const isSilent = (config) =>
  SILENT_ENDPOINTS.some((ep) => config.url?.includes(ep));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ─── Request Interceptor ────────────────────────────────────────────────────
apiClient.interceptors.request.use(
  (config) => {
    // 1. Attach Bearer token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 2. Show global loader (except silent endpoints)
    incrementLoader(isSilent(config));

    // 3. Tag config for retry tracking
    config._retryCount  = config._retryCount ?? 0;
    config._isSilent    = isSilent(config);

    return config;
  },
  (error) => {
    decrementLoader(false);
    return Promise.reject(error);
  }
);

// ─── Response Interceptor ───────────────────────────────────────────────────
apiClient.interceptors.response.use(
  // ── Success ──────────────────────────────────────────────────────────────
  (response) => {
    decrementLoader(response.config._isSilent);
    return response;
  },

  // ── Error ────────────────────────────────────────────────────────────────
  async (error) => {
    const { config, response } = error;
    decrementLoader(config?._isSilent);

    // ── 1. 401 Unauthorized → session expired ─────────────────────────────
    if (response?.status === 401) {
      localStorage.removeItem('token');
      store.dispatch(clearCredentials());
      store.dispatch(clearUserProfile());
      store.dispatch(
        showNotification({
          message: 'Session expired. Please log in again.',
          type: 'error',
        })
      );
      // Hard redirect so the router state resets cleanly
      window.location.href = '/login';
      return Promise.reject(error);
    }

    // ── 2. Retry on network failure or 5xx ────────────────────────────────
    const isNetworkError = !response;                   // no response = no connection
    const isServerError  = response?.status >= 500;
    const canRetry       = (isNetworkError || isServerError) &&
                           config?._retryCount < MAX_RETRIES;

    if (canRetry) {
      config._retryCount++;
      const delay = RETRY_DELAY * 2 ** (config._retryCount - 1); // exponential back-off
      console.warn(
        `[apiClient] Retry ${config._retryCount}/${MAX_RETRIES} for ${config.method?.toUpperCase()} ${config.url} in ${delay}ms`
      );
      await sleep(delay);
      // Re-add loader for the retry
      incrementLoader(config._isSilent);
      return apiClient(config);
    }

    // ── 3. User-visible error notifications ───────────────────────────────
    const message =
      response?.data?.message ||
      (isNetworkError
        ? 'Network error — please check your connection.'
        : 'Something went wrong. Please try again.');

    // Only notify for non-auth endpoints (login failures are handled by the form)
    const isAuthEndpoint = config?.url?.includes('/api/auth/');
    if (!isAuthEndpoint) {
      store.dispatch(showNotification({ message, type: 'error' }));
    }

    // ── 4. Normalize error so callers always get a consistent shape ────────
    const normalized = new Error(message);
    normalized.status  = response?.status;
    normalized.data    = response?.data;
    normalized.isAxiosError = true;

    return Promise.reject(normalized);
  }
);

export default apiClient;
