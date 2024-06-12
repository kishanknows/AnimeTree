import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export async function animeNewsApi() {
  try {
    const response = await axios({
      method: 'get',
      baseURL: baseUrl,
      url: '/anime/news',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
