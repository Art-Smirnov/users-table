import React from 'react';
// @ts-ignore
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { selectLimit } from '../../store/users/usersSelectors';
import { setLimit } from '../../store/users/usersSlice';

const ItemsPerPageBtn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const limit = useSelector(selectLimit);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLimit = Number(event.target.value);

    dispatch(setLimit(newLimit));

    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div>
      <div className="dropdown">
        <label
          tabIndex={0}
          className="btn btn-sm text-[0.8125rem] bg-darkerGray border-light
            pl-3 py-2 pr-3 font-normal h-9 w-[5.5rem] flex justify-between text-gray">
          {limit}
          <ArrowIcon />
        </label>
        <ul
          tabIndex={0}
          className="p-2 shadow-2xl menu dropdown-content z-[1]
            bg-base-100 rounded-box w-52">
          <li>
            <label className="cursor-pointer flex items-center justify-between">
              <span className="text-xs text-black leading-5">10</span>
              <input
                type="checkbox"
                value={10}
                checked={limit === 10}
                onChange={handleOptionChange}
              />
            </label>
          </li>
          <li>
            <label className="cursor-pointer flex items-center justify-between">
              <span className="text-xs text-black leading-5">20</span>
              <input
                type="checkbox"
                value={20}
                checked={limit === 20}
                onChange={handleOptionChange}
              />
            </label>
          </li>

          <li>
            <label className="cursor-pointer flex items-center justify-between">
              <span className="text-xs text-black leading-5">50</span>
              <input
                type="checkbox"
                value={50}
                checked={limit === 50}
                onChange={handleOptionChange}
              />
            </label>
          </li>
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

export default ItemsPerPageBtn;
