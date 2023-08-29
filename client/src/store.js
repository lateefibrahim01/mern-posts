import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import commentReducer from './commentSlice';
import postReducer from './postSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    comments: commentReducer,
    posts: postReducer,
  },
});

export default store;
