import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../api/usersAPI';
import { UsersDataType } from '../../types/usersTypes';
import axios from 'axios';

export const fetchUsersThunk = createAsyncThunk('users/fetchUsers', fetchUsers);

export const searchUsersThunk = createAsyncThunk(
  'user/searchUsers',
  async (query: string) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/users/search?q=${query}`
      );
      return response.data as UsersDataType;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  }
);
