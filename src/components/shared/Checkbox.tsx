import React, { InputHTMLAttributes, memo } from 'react';
import { ReactComponent as CheckIcon } from '../../icons/check.svg';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  isChecked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  isChecked,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={id} className="flex justify-between ">
        <span>{label}</span>
        <div>{isChecked ? <CheckIcon /> : null}</div>
      </label>
      <input
        className="hidden"
        id={id}
        name={id}
        type="checkbox"
        checked={isChecked}
        {...rest}
      />
    </>
  );
};

export default memo(Checkbox);
