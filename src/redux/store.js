import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contReducer } from './contacts/reducer';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
