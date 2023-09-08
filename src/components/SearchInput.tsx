import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsersThunk } from '../store/users/usersSlice';
import { AppDispatch } from '../store/store';
import useDebounce from '../hooks/useDebounce';
// @ts-ignore
import { ReactComponent as SearchImage } from '../icons/search.svg';
import { SelectLimit } from '../store/users/usersSelectors';

const UserSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const loading = useSelector((state: RootState) => state?.users.loading);
  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 300);
  const limit = useSelector(SelectLimit);
  console.log(limit, 'input');
  useEffect(() => {
    dispatch(
      searchUsersThunk({ query: debouncedSearchTerm, limit: limit ?? 10 })
    );
  }, [debouncedSearchTerm, dispatch, limit]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  return (
    <div className="relative">
      <input
        className="text-darkGray input input-bordered border-light w-full
          mb-3 bg-darkerGray placeholder:text-gray h-9 py-2 text-[0.8125rem]
          pl-9"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      <SearchImage className="absolute left-2 top-2" />
    </div>
  );
};

export default UserSearch;
