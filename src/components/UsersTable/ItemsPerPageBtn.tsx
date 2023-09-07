// @ts-ignore
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import React, { useState } from 'react';

const ItemsPerPageBtn = () => {
  const [selectedOption, setSelectedOption] = useState(10);
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(Number(event.target.value));
  };

  return (
    <div>
      <details className="dropdown">
        <summary
          className="btn btn-sm text-[0.8125rem] bg-darkerGray border-light
            pl-3 py-2 pr-3 font-normal h-9 w-[5.5rem] flex justify-between text-gray">
          10
          <ArrowIcon />
        </summary>
        <ul
          className="p-2 shadow-2xl menu dropdown-content z-[1]
            bg-base-100 rounded-box w-52">
          <li>
            <label className="cursor-pointer flex items-center justify-between">
              <span className="text-xs text-black leading-5">10</span>
              <input
                type="checkbox"
                value={10}
                checked={selectedOption === 10}
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
                checked={selectedOption === 20}
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
                checked={selectedOption === 50}
                onChange={handleOptionChange}
              />
            </label>
          </li>
        </ul>
      </details>
      <span
        className="uppercase ml-3 text-[0.625rem] font-semibold text-gray
          tracking-[0.0125rem]">
        Items per page
      </span>
    </div>
  );
};

export default ItemsPerPageBtn;
