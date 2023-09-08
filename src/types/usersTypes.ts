export interface UserType {
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
  bank: string;
  university: string;
  company: {
    name: string;
  };
  ein: string;
  ssn: string;
}

export type InitialUsersStateType = {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
};

export type UsersDataType = {
  users: UserType[];
  total: number | null;
  skip: number | null;
  limit: number | null;
};

export interface FetchUsersProps {
  skip?: number;
  limit?: number;
  query?: string;
}
