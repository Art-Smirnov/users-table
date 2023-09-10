import axios from 'axios';
import { FetchUsersProps } from '../types/usersTypes';

export const fetchUsers = async ({
  query = '',
  limit,
  skip
}: FetchUsersProps) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/users/search?q=${query}&limit=${limit}${
        skip ? `&skip=${skip}` : ''
      }`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
