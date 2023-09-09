import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../../api/usersAPI';
import { ApiUsersDataType, FetchUsersProps } from '../../types/usersTypes';

export const fetchUsersThunk = createAsyncThunk<
  ApiUsersDataType,
  FetchUsersProps
>('users/fetchUsers', async (props) => {
  return await fetchUsers(props);
});
