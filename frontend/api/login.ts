import axios from 'axios';

const baseURL = 'http://localhost:3000';

export interface LoginApiPayload {
  emailUsername: string;
  password: string;
}

export async function loginApi(payload: LoginApiPayload) {
  try {
    const response = await axios({
      method: 'post',
      data: payload,
      baseURL: baseURL,
      url: '/login',
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
