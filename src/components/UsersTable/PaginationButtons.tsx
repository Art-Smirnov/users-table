// @ts-ignore
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
// @ts-ignore
import { ReactComponent as LastChevronIcon } from '../../icons/lastChevron.svg';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalUsers } from '../../store/users/usersSelectors';

const PaginationButtons = () => {
  const total = useSelector(selectTotalUsers);
  const [page, setPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  const handleIncrementPage = () => {
    setPage((p) => p + 1);
  };

  const handleDecrementPage = () => {
    setPage((p) => p - 1);
  };

  const handleSetFirstPage = () => {
    setPage(1);
  };

  const handleSetLastPage = () => {
    if (total) {
      setPage(total);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (total) {
      setIsEditing(false);
      const newPage = Math.min(Math.max(Number(inputValue), 1), total);
      setPage(newPage);
    }
  };

  const firstPage = page === 1;
  const lastPage = page === total;

  return (
    <div className="flex gap-[.12rem]">
      <button
        disabled={firstPage}
        onClick={handleSetFirstPage}
        className="btn btn-sm h-9 bg-transparent border-transparent p-2
        disabled:bg-transparent disabled:opacity-30">
        <LastChevronIcon className="rotate-180" />
      </button>
      <button
        disabled={firstPage}
        onClick={handleDecrementPage}
        className="btn btn-sm h-9 bg-transparent border-transparent p-2
        disabled:bg-transparent disabled:opacity-30">
        <ChevronIcon className="rotate-180" />
      </button>
      <input
        type="number"
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
        onChange={handleInputChange}
        value={isEditing ? '' : page}
        className="btn btn-sm text-[0.8125rem] bg-darkerGray border-light
          font-normal h-9 w-16 text-gray"
      />
      <button
        disabled={lastPage}
        onClick={handleIncrementPage}
        className="btn btn-sm h-9 bg-transparent border-transparent p-2
        disabled:bg-transparent disabled:opacity-30">
        <ChevronIcon />
      </button>
      <button
        disabled={lastPage}
        onClick={handleSetLastPage}
        className="btn btn-sm h-9 bg-transparent border-transparent p-2
        disabled:bg-transparent disabled:opacity-50">
        <LastChevronIcon />
      </button>
    </div>
  );
};

export default PaginationButtons;
