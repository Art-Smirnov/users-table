import React, { memo } from 'react';
// @ts-ignore
import { ReactComponent as SettingsIcon } from '../../icons/settings.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedColumns } from '../../store/users/usersSelectors';
import { updateSelectedColumns } from '../../store/users/usersSlice';
import { AppDispatch } from '../../store/store';
import {
  DISABLED_FOR_SELECTION_COLUMNS,
  USER_COLUMNS_ARR
} from '../../utils/constants';

const TableSettings = () => {
  const selectedColumns = useSelector(selectSelectedColumns);
  const dispatch = useDispatch<AppDispatch>();

  const handleColumnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const updatedColumns = checked
      ? [...selectedColumns, name]
      : selectedColumns.filter((column) => column !== name);

    dispatch(updateSelectedColumns(updatedColumns));
  };

  return (
    <div
      className="dropdown dropdown-end border-l border-l-light
        h-7 pl-[.30rem] py-[.12rem] pr-1">
      <label
        tabIndex={0}
        className="btn btn-xs h-6 w-6 bg-transparent border-transparent
          p-1 rounded-full">
        <SettingsIcon />
      </label>
      <ul
        tabIndex={0}
        className="p-2 menu dropdown-content z-[1] text-darkGray
          bg-base-100 w-[14.25rem] rounded-xl mt-[.44rem]
          border border-light shadow-m normal-case font-normal text-[.8125rem]">
        {USER_COLUMNS_ARR.map((column) => {
          const disabledForSelection = DISABLED_FOR_SELECTION_COLUMNS.includes(
            column.id
          );

          return (
            <li key={column.id}>
              <label className="cursor-pointer flex items-center justify-between h-8">
                <span className="text-black leading-5">{column.label}</span>
                <input
                  disabled={disabledForSelection}
                  onChange={handleColumnChange}
                  name={column.id}
                  type="checkbox"
                  checked={
                    disabledForSelection || selectedColumns.includes(column.id)
                  }
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(TableSettings);
