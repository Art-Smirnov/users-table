import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
// @ts-ignore
import { ReactComponent as MaleIcon } from '../../icons/male.svg';
// @ts-ignore
import { ReactComponent as FemaleIcon } from '../../icons/female.svg';
import TableHead from './TableHead';
import TableFooter from './TableFooter';
import { selectUsers } from '../../store/users/usersSelectors';

const UsersTable = () => {
  const { users } = useSelector(selectUsers);

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function convertDateFormat(inputDate: string) {
    const parsedDate = parseISO(inputDate);
    return format(parsedDate, 'dd.MM.yyyy');
  }

  return (
    <div className="border border-light rounded-xl">
      <div
        className="overflow-x-auto
        max-h-[34.75rem]">
        <table className="table table-pin-rows table-pin-cols border-hidden">
          <TableHead />
          <tbody>
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
                          <img src={user.image} alt={user.firstName} />
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">{`
                      ${user.firstName} 
                      ${user.maidenName} 
                      ${user.lastName}
                    `}</span>
                      </div>
                    </div>
                  </th>
                  <td className="border-r border-r-light px-2 py-3">
                    <span className="min-w-max inline-block">{`
                    ${convertDateFormat(user.birthDate)} 
                    (${user.age} years old)
                  `}</span>
                  </td>
                  <td>
                    <div className="flex items-center gap-[.12rem]">
                      {user.gender === 'male' ? <MaleIcon /> : <FemaleIcon />}
                      {capitalizeFirstLetter(user.gender)}
                    </div>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span>{user.email}</span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span className="min-w-max inline-block">{user.phone}</span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span>{user.username}</span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span className="min-w-max inline-block">{`
                  Bloodgroup “${user.bloodGroup}”; Height 
                  ${user.height}; Hair color 
                  ${user.hair.color};
                `}</span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <a
                      target="_blank"
                      className="text-blue underline font-medium"
                      href={`https://${user.domain}`}
                      rel="noreferrer">
                      {user.domain}
                    </a>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span>{user.ip}</span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span>{user.macAddress}</span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span className="min-w-max inline-block">{`
                  ${user.address.address}. 
                  ${user.address.city}, 
                  ${user.address.state} 
                  ${user.address.postalCode}
                `}</span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span className="min-w-max inline-block">Mono Bank</span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span className="min-w-max inline-block">
                      {user.university}
                    </span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span className="min-w-max inline-block">
                      {user.company.name}
                    </span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span className="min-w-max inline-block">{user.ein}</span>
                  </td>
                  <td className="border border-light px-2 py-3">
                    <span className="min-w-max inline-block">{user.ssn}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <TableFooter />
    </div>
  );
};

export default UsersTable;
