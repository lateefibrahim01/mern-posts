import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API for comments
const API_URL = 'http://localhost:5000/api/comments';

// Async thunk to fetch all comments for a specific post
export const fetchCommentsForPost = createAsyncThunk(
  'comments/fetchCommentsForPost',
  async (postId) => {
    const response = await fetch(`${API_URL}/${postId}`);
    const data = await response.json();
    return data;
  }
);

// Async thunk to create a new comment for a specific post
export const createCommentForPost = createAsyncThunk(
  'comments/createCommentForPost',
  async ({ postId, commentData }) => {
    const response = await fetch(`${API_URL}/${postId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });
    const data = await response.json();
    return data;
  }
);

const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    commentsForPost: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsForPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommentsForPost.fulfilled, (state, action) => {
        state.loading = false;
        state.commentsForPost = action.payload;
      })
      .addCase(fetchCommentsForPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCommentForPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCommentForPost.fulfilled, (state, action) => {
        state.loading = false;
        state.commentsForPost.push(action.payload);
      })
      .addCase(createCommentForPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentSlice.reducer;
