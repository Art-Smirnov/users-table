import { createSlice } from '@reduxjs/toolkit';
import { UsersDataType } from '../../types/usersTypes';
import { fetchUsersThunk } from './usersThunks';
import { refactorUsersData } from '../../utils/refactorUsersData';
import { DEFAULT_SELECTED_COLUMNS } from '../../utils/constants';

const storedUserColumns = localStorage.getItem('userColumns');
const initialUserColumns =
  storedUserColumns != null
    ? JSON.parse(storedUserColumns)
    : DEFAULT_SELECTED_COLUMNS;

const initialState: UsersDataType = {
  users: [],
  loading: 'idle',
  error: null,
  limit: 10,
  skip: null,
  total: null,
  selectedColumns: initialUserColumns,
  serverSearchQuery: '',
  clientSearchQuery: ''
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setServerSearchQuery: (state, action) => {
      state.serverSearchQuery = action.payload;
    },
    setClientSearchQuery: (state, action) => {
      state.clientSearchQuery = action.payload;
    },
    updateSelectedColumns: (state, action) => {
      state.selectedColumns = action.payload;

      localStorage.setItem(
        'userColumns',
        JSON.stringify(state.selectedColumns)
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.users = action.payload.users.map(refactorUsersData);
        state.total = action.payload.total;
        state.limit = action.payload.limit;
        state.skip = action.payload.skip;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'An error occurred.';
      });
  }
});

export const {
  updateSelectedColumns,
  setClientSearchQuery,
  setServerSearchQuery
} = userSlice.actions;

export default userSlice.reducer;
