import { ApiUserType, UserType } from '../types/usersTypes';
import { convertDateFormat } from './convertDateFormat';

export function refactorUsersData(user: ApiUserType): UserType {
  const birthday = `${convertDateFormat(user.birthDate)} (${
    user.age
  } years old)`;

  const generalInfo = `Bloodgroup “${user.bloodGroup}”; Height 
    ${user.height}; Hair color 
    ${user.hair.color};`;

  const address = `
    ${user.address.address}. 
    ${user.address.city}, 
    ${user.address.state} 
    ${user.address.postalCode}
  `;

  return {
    id: user.id,
    fullName: {
      image: user.image,
      firstName: user.firstName,
      maidenName: user.maidenName,
      lastName: user.lastName
    },
    birthday,
    email: user.email,
    phone: user.phone,
    username: user.username,
    gender: user.gender,
    generalInfo,
    domain: user.domain,
    ip: user.ip,
    macAddress: user.macAddress,
    address,
    bank: user.bank.cardType,
    university: user.university,
    company: user.company.name,
    ein: user.ein,
    ssn: user.ssn
  };
}
