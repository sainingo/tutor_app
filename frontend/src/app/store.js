import { configureStore } from '@reduxjs/toolkit';
import tutorsSlice from '../features/tutors/tutorsSlice';

export const store = configureStore({
  reducer: {
    tutors: tutorsSlice
  },
});
