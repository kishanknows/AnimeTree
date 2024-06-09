import axios from 'axios';

const baseUrl = 'https://api.jikan.moe/v4';

export interface AnimeGenreApiParams {
  filter: string;
}

export async function AnimeGenreApi(params: AnimeGenreApiParams) {
  try {
    const response = await axios({
      method: 'get',
      baseURL: baseUrl,
      url: '/genres/anime',
      params: params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
