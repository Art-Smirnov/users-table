import { UserColumn, UserColumns } from '../types/usersTypes';

export const USER_COLUMNS: UserColumns = {
  fullName: 'Full name',
  birthday: 'Birthday',
  gender: 'Gender',
  email: 'Email',
  phone: 'Phone',
  username: 'Username',
  generalInfo: 'General Info',
  domain: 'Domain',
  ip: 'IP',
  macAddress: 'Mac IP',
  address: 'Address',
  bank: 'Bank',
  university: 'University',
  company: 'Company',
  ein: 'EIN',
  ssn: 'SSN'
};

export const USER_COLUMNS_ARR: UserColumn[] = [
  { id: 'fullName', label: 'Full name', sortId: 0 },
  { id: 'birthday', label: 'Birthday', sortId: 1 },
  { id: 'gender', label: 'Gender', sortId: 2 },
  { id: 'email', label: 'Email', sortId: 3 },
  { id: 'phone', label: 'Phone', sortId: 4 },
  { id: 'username', label: 'Username', sortId: 5 },
  { id: 'generalInfo', label: 'General Info', sortId: 6 },
  { id: 'domain', label: 'Domain', sortId: 7 },
  { id: 'ip', label: 'IP', sortId: 8 },
  { id: 'macAddress', label: 'Mac IP', sortId: 9 },
  { id: 'address', label: 'Address', sortId: 10 },
  { id: 'bank', label: 'Bank', sortId: 11 },
  { id: 'university', label: 'University', sortId: 12 },
  { id: 'company', label: 'Company', sortId: 13 },
  { id: 'ein', label: 'EIN', sortId: 14 },
  { id: 'ssn', label: 'SSN', sortId: 15 }
];

export const DISABLED_FOR_SELECTION_COLUMNS = ['fullName', 'username', 'email'];

export const ITEMS_PER_PAGE = [10, 20, 30];
