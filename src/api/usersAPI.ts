import axios from 'axios';
import { UsersDataType } from '../types/usersTypes';

export const fetchUsers = async (limit: number) => {
  console.log(limit);
  try {
    const response = await axios.get(
      `https://dummyjson.com/users?limit=${limit}`
    );
    return response.data as UsersDataType;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};