export interface UserType {
  id: number;
  fullName: {
    image: string;
    firstName: string;
    maidenName: string;
    lastName: string;
  };
  birthday: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  generalInfo: string;
  domain: string;
  ip: string;
  macAddress: string;
  address: string;
  bank: string;
  university: string;
  company: string;
  ein: string;
  ssn: string;
}

export interface ApiUserType {
  id: number;
  firstName: string;
  maidenName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  image: string;
  birthDate: string;
  age: number;
  gender: string;
  bloodGroup: string;
  height: number;
  weight: number;
  hair: { color: string };
  domain: string;
  ip: string;
  macAddress: string;
  address: {
    address: string;
    city: string;
    postalCode: string;
    state: string;
  };
  bank: {
    cardType: string;
  };
  university: string;
  company: {
    name: string;
  };
  ein: string;
  ssn: string;
}

type UserColumnKey = keyof UserColumns;

export type UsersDataType = {
  users: UserType[];
  total: number | null;
  skip: number | null;
  limit: number | null;
  selectedColumns: UserColumnKey[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  serverSearchQuery: string;
  clientSearchQuery: string;
};

export type ApiUsersDataType = {
  users: ApiUserType[];
  total: number | null;
  skip: number | null;
  limit: number | null;
};

export interface FetchUsersProps {
  skip?: number;
  limit?: number;
  query?: string;
}

export interface UserColumns {
  fullName: string;
  birthday: string;
  gender: string;
  email: string;
  phone: string;
  username: string;
  generalInfo: string;
  domain: string;
  ip: string;
  macAddress: string;
  address: string;
  bank: string;
  university: string;
  company: string;
  ein: string;
  ssn: string;
}

export interface UserColumn {
  id: keyof UserColumns;
  label: string;
  sortId: number;
}
