// @ts-nocheck
import { useSelector } from 'react-redux';
import { selectFilteredUsers } from '../../store/users/usersSelectors';
import UserColumns from './UserColumns';
import { memo } from 'react';

const TableBody = () => {
  const users = useSelector(selectFilteredUsers);

  return (
    <tbody>
      {/*{users.length === 0 && (*/}
      {/*  <tr>*/}
      {/*    <td className="col-span-full">*/}
      {/*      <Banner type="not-found" />*/}
      {/*    </td>*/}
      {/*  </tr>*/}
      {/*)}*/}
      {users?.map((user) => {
        return (
          <tr
            key={user.id}
            className="text-[0.8125rem] leading-5 text-darkGray">
            <th className="p-0">
              <div
                className="flex items-center gap-1 min-w-max border-r
                  border-r-light px-2 py-3">
                <div className="avatar">
                  <div className="rounded-full w-8 border border-dark">
                    <img
                      src={user.fullName.image}
                      alt={user.fullName.firstName}
                    />
                  </div>
                </div>
                <div>
                  <span className="font-medium">{`
                    ${user.fullName.firstName} 
                    ${user.fullName.maidenName} 
                    ${user.fullName.lastName}
                  `}</span>
                </div>
              </div>
            </th>
            <UserColumns user={user} />
          </tr>
        );
      })}
    </tbody>
  );
};

export default memo(TableBody);
