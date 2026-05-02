import { createSlice } from '@reduxjs/toolkit';

// Persist theme preference across sessions
const savedTheme = localStorage.getItem('theme') || 'dark';

const initialState = {
  isLoading: false,           // Global full-screen / overlay spinner
  theme: savedTheme,          // 'dark' | 'light'
  sidebarOpen: false,         // Mobile sidebar toggle
  notification: null,         // { id, message, type: 'success' | 'error' | 'info' | 'warning' }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    /** Show or hide the global loading overlay */
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    /** Toggle between dark ↔ light */
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.theme);
    },

    /** Force a specific theme */
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', state.theme);
    },

    /** Toggle mobile sidebar */
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },

    /** Explicitly open or close the sidebar */
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },

    /** Push a toast notification */
    showNotification: (state, action) => {
      state.notification = {
        id: Date.now(),
        message: action.payload.message,
        type: action.payload.type || 'info',
      };
    },

    /** Dismiss the current notification */
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const {
  setLoading,
  toggleTheme,
  setTheme,
  toggleSidebar,
  setSidebarOpen,
  showNotification,
  clearNotification,
} = uiSlice.actions;

// Selectors
export const selectIsLoading = (state) => state.ui.isLoading;
export const selectTheme = (state) => state.ui.theme;
export const selectSidebarOpen = (state) => state.ui.sidebarOpen;
export const selectNotification = (state) => state.ui.notification;

export default uiSlice.reducer;
