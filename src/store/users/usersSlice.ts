import { createSlice } from '@reduxjs/toolkit';
import { UsersDataType } from '../../types/usersTypes';
import { fetchUsersThunk } from './usersThunks';
import { refactorUsersData } from '../../utils/refactorUsersData';
import { DISABLED_FOR_SELECTION_COLUMNS } from '../../utils/constants';

const storedUserColumns = localStorage.getItem('userColumns');
const initialUserColumns =
  storedUserColumns != null
    ? JSON.parse(storedUserColumns)
    : DISABLED_FOR_SELECTION_COLUMNS;

const initialState: UsersDataType = {
  users: [],
  loading: 'idle',
  error: null,
  limit: 10,
  skip: null,
  total: null,
  selectedColumns: initialUserColumns
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
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message || 'An error occurred.';
      });
  }
});

export const { updateSelectedColumns, setLimit, setSkip } = userSlice.actions;

export default userSlice.reducer;
