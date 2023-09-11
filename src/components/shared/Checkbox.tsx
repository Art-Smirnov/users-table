import React, { InputHTMLAttributes, memo } from 'react';
import { ReactComponent as CheckIcon } from '../../icons/check.svg';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  isChecked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  isChecked,
  onChange,
  disabled,
  ...rest
}) => {
  //тут трішки нагімнокодив за браком часу
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && !disabled) {
      event.preventDefault();
      onChange({
        target: { name: id, checked: !isChecked, value: label }
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleClick = () => {
    if (!disabled) {
      onChange({
        target: { name: id, checked: !isChecked, value: label }
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div
      className="flex justify-between cursor-pointer"
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={handleKeyDown}>
      <span>{label}</span>
      <div>{isChecked ? <CheckIcon /> : null}</div>
      <input
        className="hidden"
        id={id}
        name={id}
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default memo(Checkbox);
