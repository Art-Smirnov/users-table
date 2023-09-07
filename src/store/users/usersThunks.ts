import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UsersDataType } from '../../types/usersTypes';

export const fetchUsersThunk = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await axios.get('https://dummyjson.com/users?limit=10');

      return response.data as UsersDataType;
    } catch (error) {
      throw error;
    }
  }
);
