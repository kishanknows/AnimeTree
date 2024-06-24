import suggestionReducer from './slices/suggestionSlice';
import topAnimeReducer from './slices/topAnimeSlice';
import animeDetailReducer from './slices/animeDetailSlice';
import animeGenreReducer from './slices/animeGenreSlice';
import animeNewsReducer from './slices/animeNewsSlice';
import discoverAnimeReducer from './slices/discoverAnimeSlice';
import userReducer from './slices/userSlice';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  suggestions: suggestionReducer,
  recommendation: topAnimeReducer,
  details: animeDetailReducer,
  genre: animeGenreReducer,
  news: animeNewsReducer,
  discover: discoverAnimeReducer,
  user: userReducer,
});
