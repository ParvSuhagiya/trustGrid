import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import uiReducer from './slices/uiSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,   // state.auth — token, user, isAuthenticated, loading
    user: userReducer,   // state.user — full API profile, status, error
    ui: uiReducer,       // state.ui  — isLoading, theme, sidebarOpen, notification
  },
});

export default store;
