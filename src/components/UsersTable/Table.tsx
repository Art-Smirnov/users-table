import TableBody from './TableBody';
import TableHead from './TableHead';
import { useSelector } from 'react-redux';
import {
  selectDisplayedUsersQuantity,
  selectIsLoading
} from '../../store/users/usersSelectors';
import Banner from './Banner';

const Table = () => {
  const isLoading = useSelector(selectIsLoading);
  const usersQuantity = useSelector(selectDisplayedUsersQuantity);

  if (isLoading === 'failed') {
    return <Banner type="error" />;
  }

  if (isLoading === 'pending') {
    return <Banner type="loading" />;
  }

  if (usersQuantity === 0) {
    return <Banner type="not-found" />;
  }

  return (
    <table className="table table-pin-rows table-pin-cols border-hidden h-full">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
