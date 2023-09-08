import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../api/usersAPI';
import { FetchUsersProps, UsersDataType } from '../../types/usersTypes';
import axios from 'axios';

export const fetchUsersThunk = createAsyncThunk<UsersDataType, FetchUsersProps>(
  'users/fetchUsers',
  async (props) => {
    return await fetchUsers(props);
  }
);

export const searchUsersThunk = createAsyncThunk<
  UsersDataType,
  FetchUsersProps
>('user/searchUsers', async (props) => {
  console.log(props);

  try {
    const response = await axios.get(
      `https://dummyjson.com/users/search?q=${props.query}&limit=${props.limit}`
    );
    return response.data as UsersDataType;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
});
