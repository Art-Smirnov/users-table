import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersThunk } from '../store/users/usersThunks';
import { AppDispatch } from '../store/store';
import useDebounce from '../hooks/useDebounce';
// @ts-ignore
import { selectLimit, selectSkip } from '../store/users/usersSelectors';
import UserInput from './shared/UserInput';

const MainSearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 300);
  const limit = useSelector(selectLimit);
  const skip = useSelector(selectSkip);

  useEffect(() => {
    dispatch(
      fetchUsersThunk({
        query: debouncedSearchTerm,
        limit: limit ?? 10,
        skip: skip!
      })
    );
  }, [debouncedSearchTerm, dispatch, limit, skip]);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = event.target.value;
      setQuery(newQuery);
    },
    []
  );

  return <UserInput className="mb-3" value={query} onChange={handleSearch} />;
};

export default MainSearchInput;
