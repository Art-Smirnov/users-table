import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../types/usersTypes';
import { fetchUsersThunk } from './usersThunks';

const initialState: {
  users: UserType[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
} = {
  users: [],
  loading: 'idle',
  error: null
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
      });
  }
});

export { fetchUsersThunk };

export default userSlice.reducer;
