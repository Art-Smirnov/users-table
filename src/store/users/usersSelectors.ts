import { RootState } from '../store';
import { USER_COLUMNS_ARR_SCHEMA } from '../../utils/constants';
import { createSelector } from 'reselect';
import { UserType } from '../../types/usersTypes';

export const selectUsers = (state: RootState) => state.users;

export const selectLimit = (state: RootState) => state.users.limit;

export const selectTotalUsers = (state: RootState) => state.users.total;

export const selectSkip = (state: RootState) => state.users.skip;

export const selectIsLoading = (state: RootState) => state.users.loading;

export const selectSelectedColumns = (state: RootState) =>
  state.users.selectedColumns;

export const selectSortedSelectedColumns = createSelector(
  [selectSelectedColumns],
  (selectedColumns) => {
    return selectedColumns.slice().sort((a, b) => {
      const sortIdA = USER_COLUMNS_ARR_SCHEMA.find((item) => item.id === a)
        ?.sortId;
      const sortIdB = USER_COLUMNS_ARR_SCHEMA.find((item) => item.id === b)
        ?.sortId;

      return sortIdA! - sortIdB!;
    });
  }
);

export const selectServerSearchQuery = (state: RootState) =>
  state.users.serverSearchQuery;
export const selectClientSearchQuery = (state: RootState) =>
  state.users.clientSearchQuery;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectClientSearchQuery],
  (users, searchQuery) => {
    return users.users.filter((user) => {
      const { fullName, email, username } = user as UserType;
      const lowerCaseQuery = searchQuery.toLowerCase();
      return (
        fullName.firstName.toLowerCase().includes(lowerCaseQuery) ||
        fullName.lastName.toLowerCase().includes(lowerCaseQuery) ||
        email.toLowerCase().includes(lowerCaseQuery) ||
        username.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }
);

export const selectDisplayedUsersQuantity = (state: RootState) =>
  state.users.users.length;
