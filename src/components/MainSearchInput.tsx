import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsersThunk } from '../store/users/usersThunks';
import { AppDispatch } from '../store/store';
import UserInput from './shared/UserInput';
import debounce from 'lodash/debounce'; // Import debounce from lodash

const MainSearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState('');

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
      setQuery(newQuery);
      handleSearch(newQuery);
    },
    [handleSearch]
  );

  return <UserInput className="mb-3" value={query} onChange={handleChange} />;
};

export default memo(MainSearchInput);
