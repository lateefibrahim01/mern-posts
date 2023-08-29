import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Replace 'YOUR_BACKEND_API_URL' with the actual URL of your backend API for posts
const API_URL = 'http://localhost:5000/api/posts';

// Async thunk to fetch all posts
export const fetchAllPosts = createAsyncThunk('posts/fetchAllPosts', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
});

// Async thunk to create a new post
export const createNewPost = createAsyncThunk('posts/createNewPost', async (postData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  return data;
});

// Async thunk to update a post
export const updatePost = createAsyncThunk('posts/updatePost', async ({ postId, postData }) => {
  const response = await fetch(`${API_URL}/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  const data = await response.json();
  return data;
});

// Async thunk to delete a post
export const deletePost = createAsyncThunk('posts/deletePost', async (postId) => {
  const response = await fetch(`${API_URL}/${postId}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
});

// Async thunk to like a post
export const likePost = createAsyncThunk('posts/likePost', async (postId) => {
  const response = await fetch(`${API_URL}/${postId}/like`, {
    method: 'POST',
  });
  const data = await response.json();
  return data;
});

// Async thunk to search posts
export const searchPosts = createAsyncThunk('posts/searchPosts', async (searchTerm) => {
  const response = await fetch(`${API_URL}/search?searchTerm=${searchTerm}`);
  const data = await response.json();
  return data;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    allPosts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createNewPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts.push(action.payload);
      })
      .addCase(createNewPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = state.allPosts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = state.allPosts.filter((post) => post._id !== action.payload._id);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(likePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = state.allPosts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        );
      })
      .addCase(likePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = action.payload;
      })
      .addCase(searchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
