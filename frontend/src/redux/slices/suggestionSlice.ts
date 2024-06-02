import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {searchApi} from '../../../api';

export interface Anime {
  title: string;
  img_url: string;
  genres: string[];
  rating: string;
  score: number;
  duration: string;
  trailer_url: string;
}

export const getSuggestions = createAsyncThunk(
  'suggestions/getSuggestions',
  async (query: string) => {
    const response = await searchApi({query: query});
    const data = response?.data;
    const animeList: Anime[] = [];
    data.map((item: any) => {
      animeList.push({
        title: item.title,
        trailer_url: item.trailer.url,
        img_url: item.images.jpg.image_url,
        genres: item.genres.map((genre: any) => genre.name),
        rating: item.rating,
        duration: item.duration,
        score: item.score,
      });
    });
    return animeList;
  },
);

const suggestionSlice = createSlice({
  name: 'suggestions',
  initialState: {
    results: [] as Anime[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSuggestions.pending, state => {
      state.loading = true;
    });
    builder.addCase(getSuggestions.fulfilled, (state, action) => {
      state.results = action.payload;
      state.loading = false;
    });
    builder.addCase(getSuggestions.rejected, state => {
      state.loading = false;
    });
  },
});

export default suggestionSlice.reducer;
