import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import { justEducationApi } from './api/justEducationApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add RTK Query API reducer
    [justEducationApi.reducerPath]: justEducationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(justEducationApi.middleware),
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

