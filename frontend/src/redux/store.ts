import {configureStore} from '@reduxjs/toolkit';
import suggestionReducer from './slices/suggestionSlice';

export const store = configureStore({
  reducer: {
    suggestion: suggestionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
