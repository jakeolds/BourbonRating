import { configureStore } from '@reduxjs/toolkit';
import bourbonReducer from '../features/bourbonSlice';

export const store = configureStore({
  reducer: {
    bourbons: bourbonReducer
  }
});