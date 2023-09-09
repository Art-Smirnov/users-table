// @ts-ignore
import { ReactComponent as SearchImage } from '../../icons/search.svg';
import React, { memo } from 'react';

interface UserInputProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const UserInput: React.FC<UserInputProps> = ({
  value,
  onChange,
  className
}) => {
  return (
    <div className={className}>
      <div className="relative">
        <input
          className="text-darkGray input input-bordered border-light w-full
          bg-darkerGray placeholder:text-gray h-9 py-2 text-[0.8125rem]
          pl-9"
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
        />
        <SearchImage className="absolute left-2 top-2" />
      </div>
    </div>
  );
};

export default memo(UserInput);
