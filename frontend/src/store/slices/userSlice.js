import { createSlice } from '@reduxjs/toolkit';

// 'status' follows the standard RTK pattern: idle | loading | succeeded | failed
const initialState = {
  profile: null,          // Full profile object returned by the API
  status: 'idle',         // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /** Store a fetched user profile */
    setUserProfile: (state, action) => {
      state.profile = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },

    /** Clear profile on logout */
    clearUserProfile: (state) => {
      state.profile = null;
      state.status = 'idle';
      state.error = null;
    },

    /** Set loading state while profile fetch is in-flight */
    setUserStatus: (state, action) => {
      state.status = action.payload; // 'loading' | 'idle' | 'failed'
    },

    /** Store a profile fetch error */
    setUserError: (state, action) => {
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const {
  setUserProfile,
  clearUserProfile,
  setUserStatus,
  setUserError,
} = userSlice.actions;

// Selectors
export const selectUserProfile = (state) => state.user.profile;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;

export default userSlice.reducer;
