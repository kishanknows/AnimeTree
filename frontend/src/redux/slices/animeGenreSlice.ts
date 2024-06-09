import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {AnimeGenreApi} from '../../../api';

export interface Genre {
  id: number;
  name: string;
}

export const getAnimeGenre = createAsyncThunk(
  'genre/getAnimeGenre',
  async (filter: string) => {
    const response = await AnimeGenreApi({filter: filter});
    const genreList = [] as Genre[];
    response.data.map((item: any) => {
      genreList.push({
        id: item.mal_id,
        name: item.name,
      });
    });
    return genreList;
  },
);

const animeGenreSlice = createSlice({
  name: 'genre',
  initialState: {
    results: [] as Genre[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAnimeGenre.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAnimeGenre.fulfilled, (state, action) => {
      state.results = action.payload;
      state.loading = false;
    });
    builder.addCase(getAnimeGenre.rejected, state => {
      state.loading = false;
    });
  },
});

export default animeGenreSlice.reducer;
