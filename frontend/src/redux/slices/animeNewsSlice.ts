import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {animeNewsApi} from '../../../api';

export interface News {
  headline: string;
  url: string;
  thumbnail: string;
  hook: string;
  timePosted: string;
  full: string;
}

export const getAnimeNews = createAsyncThunk('news/getAnimeNews', async () => {
  const response = await animeNewsApi();
  const newsList = [] as News[];
  response.map((item: any) => {
    newsList.push({
      headline: item.headline,
      url: item.url,
      thumbnail: item.thumbnail,
      hook: item.hook,
      timePosted: item.time_posted,
      full: item.full,
    });
  });
  return newsList;
});

const animeNewsSlice = createSlice({
  name: 'news',
  initialState: {data: [] as News[], loading: false as boolean},
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAnimeNews.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAnimeNews.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getAnimeNews.rejected, state => {
      state.loading = false;
    });
  },
});

export default animeNewsSlice.reducer;
