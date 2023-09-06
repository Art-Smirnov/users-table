import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UsersDataType, UserType } from '../../types/usersTypes';

const initialState: {
  users: UserType[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
} = {
  users: [],
  loading: 'idle',
  error: null
};

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get('https://dummyjson.com/users?limit=10');
    // console.log(response.data);
    // eslint-disable-next-line no-undef
    return response.data as UsersDataType;
  } catch (error) {
    throw error;
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.users = action.payload.users;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'An error occurred.';
      });
  }
});

export { fetchUsers };

export default userSlice.reducer;
