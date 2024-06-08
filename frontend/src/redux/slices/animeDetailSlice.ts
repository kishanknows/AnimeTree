import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Anime} from './suggestionSlice';
import {animeDetailsApi} from '../../../api';

export const getAnimeDetails = createAsyncThunk(
  'details/getAnimeDetails',
  async (id: number) => {
    const response = await animeDetailsApi(id);
    const data = response?.data;
    const anime: Anime = {
      id: data.mal_id,
      title: data.title,
      img_url: data.images.jpg.large_image_url,
      rating: data.rating,
      score: data.score,
      trailer_url: data.trailer.url,
      genres: data.genres.map((item: any) => item.name),
      duration: data.duration,
      synopsis: data.synopsis,
    };
    return anime;
  },
);

const animeDetailSlice = createSlice({
  name: 'details',
  initialState: {
    data: {} as Anime,
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAnimeDetails.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAnimeDetails.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getAnimeDetails.rejected, state => {
      state.loading = false;
    });
  },
});

export default animeDetailSlice.reducer;
