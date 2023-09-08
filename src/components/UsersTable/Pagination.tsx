import React, { useEffect, useState } from 'react';
// @ts-ignore
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
// @ts-ignore
import { ReactComponent as LastChevronIcon } from '../../icons/lastChevron.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLimit,
  selectTotalUsers
} from '../../store/users/usersSelectors';
import { AppDispatch } from '../../store/store';
import { setSkip } from '../../store/users/usersSlice';

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const limit = useSelector(selectLimit);
  const total = useSelector(selectTotalUsers);
  const [page, setPage] = useState<number | string>(1);

  const totalPages = total ? Math.ceil(total / limit!) : 0;

  // if (totalPages < page) {
  //   setPage(1);
  // }

  useEffect(() => {
    const skip = +page * limit! - limit!;
    dispatch(setSkip(skip));
  }, [dispatch, limit, page]);

  const handleIncrementPage = () => {
    setPage((p) => +p + 1);
  };

  const handleDecrementPage = () => {
    setPage((p) => +p - 1);
  };

  const handleSetFirstPage = () => {
    setPage(1);
  };

  const handleSetLastPage = () => {
    setPage(totalPages);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const newPage = Math.min(+inputValue, totalPages);
    setPage(newPage);
  };

  const firstPage = page <= 1;
  const lastPage = page === totalPages;

  return (
    <div className="flex items-center gap-3">
      <div
        className="font-semibold text-[0.625rem] text-gray
        tracking-[0.0125rem]">
        <span className="">{`${
          page ? page : 1
        } - ${totalPages} OF ${total}`}</span>
      </div>
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
          min={1}
          onChange={handleInputChange}
          value={page === 0 ? '' : page}
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
    </div>
  );
};

export default Pagination;
