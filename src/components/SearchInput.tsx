import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUsersThunk } from '../store/users/usersSlice';
import { AppDispatch } from '../store/store';
import useDebounce from '../hooks/useDebounce';
// @ts-ignore
import { ReactComponent as SearchImage } from '../icons/search.svg';

const UserSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  // const loading = useSelector((state: RootState) => state?.users.loading);

  const [query, setQuery] = useState('');
  const debouncedSearchTerm = useDebounce(query, 300);

  useEffect(() => {
    dispatch(searchUsersThunk(debouncedSearchTerm));
  }, [debouncedSearchTerm, dispatch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  return (
    <div className="relative">
      <input
        className="text-darkGray input input-bordered border-light w-full
          mb-3 bg-darkerGray placeholder:text-gray h-9 text-[0.8125rem] py-2
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
