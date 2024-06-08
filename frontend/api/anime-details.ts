import axios from 'axios';

const baseUrl = 'https://api.jikan.moe/v4';

export async function animeDetailsApi(id: number) {
  try {
    const response = await axios({
      method: 'get',
      baseURL: baseUrl,
      url: `/anime/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
