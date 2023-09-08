import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../api/usersAPI';
import { FetchUsersProps, UsersDataType } from '../../types/usersTypes';

export const fetchUsersThunk = createAsyncThunk<UsersDataType, FetchUsersProps>(
  'users/fetchUsers',
  async (props) => {
    return await fetchUsers(props);
  }
);
