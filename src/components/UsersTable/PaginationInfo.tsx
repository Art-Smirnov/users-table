import { useSelector } from 'react-redux';
import {
  selectLimit,
  selectTotalUsers
} from '../../store/users/usersSelectors';

const PaginationInfo = () => {
  const total = useSelector(selectTotalUsers);
  const limit = useSelector(selectLimit);

  let totalPages;

  if (total && limit) {
    totalPages = total / limit;
  }

  console.log(totalPages);

  return (
    <div
      className="font-semibold text-[0.625rem] text-gray
        tracking-[0.0125rem]">
      <span className="">{totalPages}</span>
    </div>
  );
};

export default PaginationInfo;
