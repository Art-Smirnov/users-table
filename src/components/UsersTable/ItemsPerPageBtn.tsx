import React, { memo, useCallback } from 'react';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { ITEMS_PER_PAGE_SCHEMA } from '../../utils/constants';
import Checkbox from '../shared/Checkbox';
import { fetchUsersThunk } from '../../store/users/usersThunks';
import {
  selectLimit,
  selectServerSearchQuery
} from '../../store/users/usersSelectors';
import { setLimit } from '../../store/users/usersSlice';

const ItemsPerPageBtn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const limit = useSelector(selectLimit);
  const query = useSelector(selectServerSearchQuery);

  const handleOptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newLimit = Number(event.target.value);
      dispatch(setLimit(newLimit));
      dispatch(
        fetchUsersThunk({ query: query, limit: newLimit ?? 10, skip: 0 })
      );

      const elem = document.activeElement as HTMLElement;
      if (elem) {
        elem?.blur();
      }
    },
    [dispatch, query]
  );

  return (
    <div>
      <div className="dropdown">
        <label
          tabIndex={0}
          className="btn btn-sm text-[0.8125rem] bg-darkerGray border-light
            pl-3 py-2 pr-3 font-normal h-9 w-[5.5rem] flex justify-between text-gray">
          {Math.max(limit!, 10)}
          <ArrowIcon />
        </label>
        <ul
          tabIndex={0}
          className="p-2 menu dropdown-content z-[1] text-darkGray
            bg-base-100 w-[14.25rem] rounded-xl mt-[.44rem] leading-5
            border border-light shadow-m normal-case font-normal text-[.8125rem]">
          {ITEMS_PER_PAGE_SCHEMA.map((value, id) => {
            return (
              <li key={id}>
                <Checkbox
                  id={id.toString()}
                  value={value}
                  label={value.toString()}
                  isChecked={limit === value}
                  onChange={handleOptionChange}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <span
        className="uppercase ml-3 text-[0.625rem] font-semibold text-gray
          tracking-[0.0125rem]">
        Items per page
      </span>
    </div>
  );
};

export default memo(ItemsPerPageBtn);
