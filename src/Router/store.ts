// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import allDataReducer from './Slices/allDataSlice';

export const store = configureStore({
  reducer: {
    allData: allDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
