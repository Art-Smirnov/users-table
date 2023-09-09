import axios from 'axios';
import { FetchUsersProps } from '../types/usersTypes';

export const fetchUsers = async (props: FetchUsersProps) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/users/search?q=${props.query}&limit=${
        props.limit
      }${props.skip ? `&skip=${props.skip}` : ''}`
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
