import axios from 'axios';

const baseUrl = 'https://api.jikan.moe/v4';

export async function topAnimeApi() {
  try {
    const response = await axios({
      method: 'get',
      baseURL: baseUrl,
      url: '/top/anime',
      params: {
        filter: 'airing',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
