// @ts-nocheck
import { RootState } from '../store';
import { USER_COLUMNS_ARR } from '../../utils/constants';
import { createSelector } from 'reselect';

export const selectUsers = (state: RootState) => state.users;

export const selectLimit = (state: RootState) => state.users.limit;

export const selectTotalUsers = (state: RootState) => state.users.total;

export const selectSkip = (state: RootState) => state.users.skip;

export const selectColumnNames = (state: RootState) => {
  if (state.users.users.length > 1) {
    return Object.keys(state.users.users[0]);
  }
};

export const selectSelectedColumns = (state: RootState) =>
  state.users.selectedColumns;

export const selectSortedSelectedColumns = createSelector(
  [selectSelectedColumns],
  (selectedColumns) => {
    return selectedColumns.slice().sort((a, b) => {
      const sortIdA = USER_COLUMNS_ARR.find((item) => item.id === a)?.sortId;
      const sortIdB = USER_COLUMNS_ARR.find((item) => item.id === b)?.sortId;

      return sortIdA - sortIdB;
    });
  }
);
