import { RootState } from '../store';

export const selectUsers = (state: RootState) => state.users;

export const selectLimit = (state: RootState) => state.users.limit;

export const selectTotalUsers = (state: RootState) => state.users.total;

export const selectSkip = (state: RootState) => state.users.skip;
