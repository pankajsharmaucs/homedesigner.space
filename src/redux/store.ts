// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    auth: authReducer,
  },
});

// // Optional: export types for state and dispatch usage
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
