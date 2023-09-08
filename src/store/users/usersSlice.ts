import { createSlice } from '@reduxjs/toolkit';
import { InitialUsersStateType, UsersDataType } from '../../types/usersTypes';
import { fetchUsersThunk } from './usersThunks';

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
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setSkip: (state, action) => {
      state.skip = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.users = action.payload.users;
        state.total = action.payload.total;
        // state.limit = action.payload.limit;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'An error occurred.';
      });
  }
});

export const { setLimit, setSkip } = userSlice.actions;

export default userSlice.reducer;
