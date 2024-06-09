import {configureStore} from '@reduxjs/toolkit';
import suggestionReducer from './slices/suggestionSlice';
import topAnimeReducer from './slices/topAnimeSlice';
import animeDetailReducer from './slices/animeDetailSlice';
import animeGenreReducer from './slices/animeGenreSlice';

export const store = configureStore({
  reducer: {
    suggestions: suggestionReducer,
    recommendation: topAnimeReducer,
    details: animeDetailReducer,
    genre: animeGenreReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
