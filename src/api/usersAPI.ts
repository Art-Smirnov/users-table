import axios from 'axios';
import { FetchUsersProps } from '../types/usersTypes';

axios.defaults.baseURL = 'https://dummyjson.com';

export const fetchUsers = async ({
  query,
  limit = 10,
  skip
}: FetchUsersProps) => {
  try {
    let url = '/users';

    if (query) {
      url += `/search?q=${query}`;
    }

    const params: Record<string, any> = {};

    if (limit) {
      params.limit = limit;
    }
    if (skip) {
      params.skip = skip;
    }

    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
