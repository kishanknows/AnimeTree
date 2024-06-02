import {configureStore} from '@reduxjs/toolkit';
import suggestionReducer from './slices/suggestionSlice';
import topAnimeReducer from './slices/topAnimeSlice';

export const store = configureStore({
  reducer: {
    suggestions: suggestionReducer,
    recommendation: topAnimeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
