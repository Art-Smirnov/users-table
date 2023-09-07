import { RootState } from '../store';

export const selectUsers = (state: RootState) => state.users;

export const SelectLimit = (state: RootState) => state.users.limit;
