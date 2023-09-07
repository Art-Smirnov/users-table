import { createSlice } from '@reduxjs/toolkit';
import { InitialUsersStateType, UsersDataType } from '../../types/usersTypes';
import { fetchUsersThunk, searchUsersThunk } from './usersThunks';

const initialState: InitialUsersStateType & UsersDataType = {
  users: [],
  loading: 'idle',
  error: null,
  limit: 10,
  skip: null,
  total: null
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.users = action.payload.users;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'An error occurred.';
      })

      .addCase(searchUsersThunk.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(searchUsersThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.users = action.payload.users;
      })
      .addCase(searchUsersThunk.rejected, (state, action) => {
        state.loading = 'failed';
        state.error =
          action.error.message || 'An error occurred during search.';
      });
  }
});

export { fetchUsersThunk, searchUsersThunk };

export default userSlice.reducer;
