import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {discoverAnimeApi, searchApi} from '../../../api';

export interface DiscoverAnimeType {
  id: number;
  title: string;
  thumbnail: string | undefined;
  synopsis: string;
  type: string;
  aired: string;
  eps: string;
}

export const getDiscoverAnime = createAsyncThunk(
  'discover/getDiscoverAnime',
  async (id: number) => {
    const response = await discoverAnimeApi(id);
    const animeList: DiscoverAnimeType[] = [];
    response.map((item: any) => {
      animeList.push({
        id: item.id,
        title: item.title,
        synopsis: item.synopsis,
        thumbnail: item.thumbnail,
        aired: item.aired,
        eps: item.eps,
        type: item.type,
      });
    });
    return animeList;
  },
);

const discoverAnimeSlice = createSlice({
  name: 'discover',
  initialState: {
    results: [] as DiscoverAnimeType[],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDiscoverAnime.pending, state => {
      state.loading = true;
    });
    builder.addCase(getDiscoverAnime.fulfilled, (state, action) => {
      state.results = action.payload;
      state.loading = false;
    });
    builder.addCase(getDiscoverAnime.rejected, state => {
      state.loading = false;
    });
  },
});

export default discoverAnimeSlice.reducer;
