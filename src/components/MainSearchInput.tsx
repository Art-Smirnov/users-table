import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from '../store/users/usersThunks';
import { AppDispatch } from '../store/store';
import UserInput from './shared/UserInput';
import debounce from 'lodash/debounce';
import { setServerSearchQuery } from '../store/users/usersSlice';
import {
  selectLimit,
  selectServerSearchQuery
} from '../store/users/usersSelectors';

const MainSearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector(selectServerSearchQuery);
  const limit = useSelector(selectLimit);

  const handleSearch = useCallback(
    debounce((newQuery: string, limit: number) => {
      dispatch(
        fetchUsersThunk({
          query: newQuery,
          limit: limit
        })
      );
    }, 300),
    [dispatch]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = event.target.value;
      dispatch(setServerSearchQuery(newQuery));
      handleSearch(newQuery, limit!);
    },
    [dispatch, handleSearch, limit]
  );

  return <UserInput className="mb-3" value={query} onChange={handleChange} />;
};

export default memo(MainSearchInput);
