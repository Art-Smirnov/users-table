import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from '../store/users/usersThunks';
import { AppDispatch } from '../store/store';
import UserInput from './shared/UserInput';
import debounce from 'lodash/debounce';
import { setServerSearchQuery } from '../store/users/usersSlice';
import { selectServerSearchQuery } from '../store/users/usersSelectors';

const MainSearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector(selectServerSearchQuery);

  const handleSearch = useCallback(
    debounce((newQuery: string) => {
      dispatch(
        fetchUsersThunk({
          query: newQuery
        })
      );
    }, 300),
    [dispatch]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = event.target.value;
      dispatch(setServerSearchQuery(newQuery));
      handleSearch(newQuery);
    },
    [dispatch, handleSearch]
  );

  return <UserInput className="mb-3" value={query} onChange={handleChange} />;
};

export default memo(MainSearchInput);
