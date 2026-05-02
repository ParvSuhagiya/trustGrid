/**
 * utils/api.js — Backwards-compatible apiFetch wrapper
 *
 * All existing components continue to call  apiFetch(endpoint, options)
 * unchanged. Under the hood every call now goes through the centralized
 * Axios apiClient (interceptors, retry, loading state, error toasts).
 *
 * options shape (same as the old fetch-based API):
 *   { method, body (JSON string), headers }
 */

import apiClient from '../services/apiClient';

/**
 * Drop-in replacement for the old fetch-based helper.
 * Returns the parsed response body (response.data) on success.
 * Throws a normalized Error on failure (handled by apiClient interceptor).
 */
export const apiFetch = async (endpoint, options = {}) => {
  const { method = 'GET', body, headers: extraHeaders = {} } = options;

  const response = await apiClient({
    url: endpoint,
    method: method.toLowerCase(),
    // body comes in as a JSON string from existing callers → parse back to object
    data: body ? JSON.parse(body) : undefined,
    headers: extraHeaders,
  });

  return response.data;
};

// Also export the raw client for new code that wants full Axios control
export { default as apiClient } from '../services/apiClient';
