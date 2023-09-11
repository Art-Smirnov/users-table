import ItemsPerPageBtn from './ItemsPerPageBtn';
import Pagination from './Pagination';
import { memo } from 'react';

const TableFooter = () => {
  return (
    <div className="p-2 flex justify-between border-b border-x border-light rounded-b-xl">
      <ItemsPerPageBtn />
      <Pagination />
    </div>
  );
};

export default memo(TableFooter);
