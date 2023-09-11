import React, { memo } from 'react';
import UserInput from '../shared/UserInput';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setClientSearchQuery } from '../../store/users/usersSlice';
import { selectClientSearchQuery } from '../../store/users/usersSelectors';

const LocalSearchInput = () => {
  const dispatch = useDispatch<AppDispatch>();

  const query = useSelector(selectClientSearchQuery);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setClientSearchQuery(event.target.value));
  };

  return (
    <div>
      <UserInput className="mb-2" value={query} onChange={handleSearch} />
    </div>
  );
};

export default memo(LocalSearchInput);
