import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as LastChevronIcon } from '../../icons/lastChevron.svg';
import {
  selectIsLoading,
  selectLimit,
  selectServerSearchQuery,
  selectSkip,
  selectTotalUsers
} from '../../store/users/usersSelectors';
import { AppDispatch } from '../../store/store';
import { fetchUsersThunk } from '../../store/users/usersThunks';

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const query = useSelector(selectServerSearchQuery);
  const limit = useSelector(selectLimit);
  const total = useSelector(selectTotalUsers);
  const [page, setPage] = useState<number | string>(1);

  const totalPages = Math.ceil(total! / limit!);
  const skip = useSelector(selectSkip);

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    setPage(1);
  }, [limit]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);

      dispatch(
        fetchUsersThunk({
          query: query,
          skip: (newPage - 1) * limit!,
          limit: limit!
        })
      );
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const newPage = Math.min(+inputValue, totalPages);
    setPage(newPage);
    if (newPage >= 1 && newPage !== page) {
      dispatch(
        fetchUsersThunk({ skip: (newPage - 1) * limit!, limit: limit! })
      );
    }
  };

  const firstSeenNumber = Math.min(skip! + 1, total!);
  const lastSeenNumber = Math.min(skip! + limit!, total!);
  const firstPage = firstSeenNumber === 1;
  const lastPage = lastSeenNumber === total;
  const isDisabledButton = isLoading === 'pending';

  return (
    <div className="flex items-center gap-3">
      <div className="font-semibold text-[0.625rem] text-gray tracking-[0.0125rem]">
        <span className="">{`${firstSeenNumber} - ${lastSeenNumber} OF ${total}`}</span>
      </div>
      <div className="flex gap-[.12rem]">
        <button
          disabled={firstPage || isDisabledButton}
          onClick={() => handlePageChange(1)}
          className="btn btn-sm h-9 bg-transparent border-transparent p-2 disabled:bg-transparent disabled:opacity-30">
          <LastChevronIcon className="rotate-180" />
        </button>
        <button
          disabled={firstPage || isDisabledButton}
          onClick={() => handlePageChange(+page - 1)}
          className="btn btn-sm h-9 bg-transparent border-transparent p-2 disabled:bg-transparent disabled:opacity-30">
          <ChevronIcon className="rotate-180" />
        </button>
        <input
          type="number"
          min={1}
          onChange={handleInputChange}
          value={page === 0 ? '' : page}
          className="btn btn-sm text-[0.8125rem] bg-darkerGray border-light font-normal h-9 w-16 text-gray"
        />
        <button
          disabled={lastPage || isDisabledButton}
          onClick={() => handlePageChange(+page + 1)}
          className="btn btn-sm h-9 bg-transparent border-transparent p-2 disabled:bg-transparent disabled:opacity-30">
          <ChevronIcon />
        </button>
        <button
          disabled={lastPage || isDisabledButton}
          onClick={() => handlePageChange(totalPages)}
          className="btn btn-sm h-9 bg-transparent border-transparent p-2 disabled:bg-transparent disabled:opacity-50">
          <LastChevronIcon />
        </button>
      </div>
    </div>
  );
};

export default memo(Pagination);
