import axios from 'axios';

const baseUrl = 'https://api.jikan.moe/v4';

export interface SearchApiPayload {
  query: string;
}

export async function searchApi(params: SearchApiPayload) {
  try {
    const response = await axios({
      method: 'get',
      baseURL: baseUrl,
      url: '/anime',
      params: {
        q: params.query,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
