import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';
import { fetchUsers } from '../store/users/usersSlice';

const UsersTable = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state?.users);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchUsers());
  }, [dispatch]);

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-pin-rows table-pin-cols">
        <thead>
          <tr className="uppercase">
            <th className="border border-light">full Name</th>
            <td>Birthday</td>
            <td>Gender</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Usename</td>
            <td>General info</td>
            <td>Domain</td>
            <td>IP</td>
            <td>Mac ip</td>
            <td>Address</td>
            <td>Bank</td>
            <td>University</td>
            <td>Company</td>
            <td>ein</td>
            <td>ssn</td>
            <th>X</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr className="border-r-light" key={user.id}>
                <th>
                  <div className="flex items-center space-x-3 min-w-max">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.image} alt={user.firstName} />
                      </div>
                    </div>
                    <div>
                      <span>{`
                      ${user.firstName} 
                      ${user.maidenName} 
                      ${user.lastName}
                    `}</span>
                    </div>
                  </div>
                </th>
                <td className="border-l-light">
                  <span className="min-w-max inline-block">{`${user.birthDate} (${user.age} years old)`}</span>
                </td>
                <td>{capitalizeFirstLetter(user.gender)}</td>
                <td>
                  <span>{user.email}</span>
                </td>
                <td>
                  <span className="min-w-max inline-block">{user.phone}</span>
                </td>
                <td>
                  <span>{user.username}</span>
                </td>
                <td>
                  <span className="min-w-max inline-block">{`
                  Bloodgroup “${user.bloodGroup}”; Height 
                  ${user.height}; Hair color 
                  ${user.hair.color};
                `}</span>
                </td>
                <td>
                  <a href={user.domain}>{user.domain}</a>
                </td>
                <td>
                  <span>{user.ip}</span>
                </td>
                <td>
                  <span>{user.macAddress}</span>
                </td>
                <td>
                  <span className="min-w-max inline-block">{`
                  ${user.address.address}. 
                  ${user.address.city}, 
                  ${user.address.state} 
                  ${user.address.postalCode}
                `}</span>
                </td>
                <td>
                  <span className="min-w-max inline-block">Mono Bank</span>
                </td>
                <td>
                  <span className="min-w-max inline-block">
                    {user.university}
                  </span>
                </td>
                <td>
                  <span className="min-w-max inline-block">
                    {user.company.name}
                  </span>
                </td>
                <td>
                  <span className="min-w-max inline-block">{user.ein}</span>
                </td>
                <td>
                  <span className="min-w-max inline-block">{user.ssn}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
