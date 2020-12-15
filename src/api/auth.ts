import axios from 'axios';

export const login = async (provider: string, accessToken: string) => {
  return axios.get(
    `http://localhost:3000/api/auth/${provider}?access_token=${accessToken}`,
  );
};
