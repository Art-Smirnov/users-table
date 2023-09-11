import React, { memo } from 'react';
import { UserType } from '../../types/usersTypes';
import { useSelector } from 'react-redux';
import { selectSortedSelectedColumns } from '../../store/users/usersSelectors';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
// @ts-ignore
import { ReactComponent as MaleIcon } from '../../icons/male.svg';
// @ts-ignore
import { ReactComponent as FemaleIcon } from '../../icons/female.svg';
interface UserColumnsProps {
  user: UserType;
}

const UserColumns: React.FC<UserColumnsProps> = ({ user }) => {
  const selectedColumns = useSelector(selectSortedSelectedColumns);
  type ValidColumns = keyof UserType;

  const getColumnText = (column: ValidColumns): React.ReactNode => {
    const isGender = column === 'gender';

    if (column === 'domain') {
      return (
        <a
          target="_blank"
          className="text-blue underline font-medium"
          href={`https://${user.domain}`}
          rel="noreferrer">
          {user.domain}
        </a>
      );
    }

    if (isGender) {
      return (
        <div className="flex items-center gap-[.12rem]">
          {user.gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
          {capitalizeFirstLetter(user.gender)}
        </div>
      );
    }

    return (
      <span className="min-w-max inline-block">
        {user[column] as keyof UserType}
      </span>
    );
  };

  return (
    <>
      {selectedColumns.map((column) => {
        return (
          <td key={column} className="border-r border-r-light px-2 py-3">
            {getColumnText(column)}
          </td>
        );
      })}
    </>
  );
};

export default memo(UserColumns);
