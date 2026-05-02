import { createSlice } from '@reduxjs/toolkit';

// Helper: safely decode JWT payload
const decodeToken = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
};

const storedToken = localStorage.getItem('token');
const decodedUser = storedToken ? decodeToken(storedToken) : null;

const initialState = {
  user: decodedUser,            // { id, name, email, role, ... } decoded from JWT
  token: storedToken,           // raw JWT string
  isAuthenticated: !!decodedUser,
  loading: !!storedToken,       // true on boot if token exists (will validate)
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /** Called after a successful login or register */
    setCredentials: (state, action) => {
      const { token } = action.payload;
      const user = decodeToken(token);
      state.token = token;
      state.user = user;
      state.isAuthenticated = !!user;
      state.loading = false;
    },

    /** Called on logout or invalid token */
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },

    /** Used during app boot to show/hide loading spinner */
    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCredentials, clearCredentials, setAuthLoading } = authSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthLoading = (state) => state.auth.loading;

export default authSlice.reducer;
