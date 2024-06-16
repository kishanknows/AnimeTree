import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export async function discoverAnimeApi(id: number) {
  try {
    const response = await axios({
      method: 'get',
      baseURL: baseUrl,
      url: `/anime/genre/${id}`,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
