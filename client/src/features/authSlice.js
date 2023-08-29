import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API for authentication
const API_URL = 'http://localhost:5000/api/auth';

// Async thunk to fetch user data from the backend
export const fetchUserData = createAsyncThunk('auth/fetchUserData', async () => {
  const response = await fetch(`${API_URL}/google-login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ idToken: 'YOUR_GOOGLE_ID_TOKEN' }),
  });
  const data = await response.json();
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
