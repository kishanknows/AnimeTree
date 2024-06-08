import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Anime} from './suggestionSlice';
import {Filter, topAnimeApi} from '../../../api';

export const getTopAnime = createAsyncThunk(
  'recommendation/getTopAnime',
  async (filter: Filter) => {
    const response = await topAnimeApi({filter: filter});
    const data = response?.data;
    const animeList: Anime[] = [];
    data.map((item: any) => {
      animeList.push({
        id: item.mal_id,
        title: item.title,
        trailer_url: item.trailer.url,
        img_url: item.images.jpg.large_image_url,
        genres: item.genres.map((genre: any) => genre.name),
        rating: item.rating,
        duration: item.duration,
        score: item.score,
        synopsis: item.synopsis,
      });
    });
    return {filter, animeList};
  },
);

const topAnimeSlice = createSlice({
  name: 'recommendation',
  initialState: {
    topAnime: {
      airing: [] as Anime[],
      upcoming: [] as Anime[],
      bypopularity: [] as Anime[],
      favorite: [] as Anime[],
    },
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getTopAnime.pending, state => {
      state.loading = true;
    });
    builder.addCase(getTopAnime.fulfilled, (state, action) => {
      const {filter, animeList} = action.payload;
      state.topAnime[filter] = animeList;
      state.loading = false;
    });
    builder.addCase(getTopAnime.rejected, state => {
      state.loading = false;
    });
  },
});

export default topAnimeSlice.reducer;
