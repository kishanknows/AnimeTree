import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Anime} from './suggestionSlice';
import {topAnimeApi} from '../../../api';

export const getTopAnime = createAsyncThunk(
  'recommendation/getTopAnime',
  async () => {
    const response = await topAnimeApi();
    const data = response?.data;
    const animeList: Anime[] = [];
    data.map((item: any) => {
      animeList.push({
        title: item.title,
        trailer_url: item.trailer.url,
        img_url: item.images.jpg.large_image_url,
        genres: item.genres.map((genre: any) => genre.name),
        rating: item.rating,
        duration: item.duration,
        score: item.score,
      });
    });
    return animeList;
  },
);

const topAnimeSlice = createSlice({
  name: 'recommendation',
  initialState: {
    topAnime: [] as Anime[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTopAnime.pending, state => {
      state.loading = true;
    });
    builder.addCase(getTopAnime.fulfilled, (state, action) => {
      state.topAnime = action.payload;
      state.loading = false;
    });
    builder.addCase(getTopAnime.rejected, state => {
      state.loading = false;
    });
  },
});

export default topAnimeSlice.reducer;
