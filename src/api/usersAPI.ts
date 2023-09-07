import axios from 'axios';
import { UsersDataType } from '../types/usersTypes';

export const fetchUsers = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users?limit=10');
    return response.data as UsersDataType;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
