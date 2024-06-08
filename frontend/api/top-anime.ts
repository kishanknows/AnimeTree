import axios from 'axios';

const baseUrl = 'https://api.jikan.moe/v4';

export type Filter = 'airing' | 'upcoming' | 'bypopularity' | 'favorite';
export interface TopAnimeApiParams {
  filter: Filter;
}

const RETRY_COUNT = 5;
const RETRY_DELAY_MS = 100;

function sleep(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function topAnimeApi(params: TopAnimeApiParams) {
  let count = RETRY_COUNT;
  while (count > 0) {
    try {
      const response = await axios({
        method: 'get',
        baseURL: baseUrl,
        url: '/top/anime',
        params: params,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      await sleep(RETRY_DELAY_MS);
    } finally {
      count -= 1;
    }
  }
  throw new Error(`Too many retries`);
}
