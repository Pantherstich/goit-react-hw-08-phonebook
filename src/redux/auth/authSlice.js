import { createSlice } from '@reduxjs/toolkit';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from './thunks';

// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleFulfilled = (state, action) => {
//   state.token = action.payload.token;
//   state.user = action.payload.user;
//   state.isLoggedIn = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload.message;
//   state.isRefreshing = false;
// };

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    user: null,
    isLoading: false,
    error: null,
    isRefreshing: false,
    isLoggedIn: false,
  },

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(currentUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUserThunk.rejected, state => {
        state.isRefreshing = false;
      });
  },
});
export const authReducer = authSlice.reducer;
