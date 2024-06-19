import axios from 'axios';

const baseURL = 'http://localhost:3000';

export interface SignupApiPayload {
  username: string;
  email: string;
  password: string;
  role: string;
}

export async function signupApi(payload: SignupApiPayload) {
  try {
    const response = await axios({
      method: 'post',
      baseURL: baseURL,
      url: '/signup',
      data: payload,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
