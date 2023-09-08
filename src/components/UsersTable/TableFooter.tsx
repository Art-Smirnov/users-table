import ItemsPerPageBtn from './ItemsPerPageBtn';
import Pagination from './Pagination';

const TableFooter = () => {
  return (
    <div className="p-2 flex justify-between">
      <ItemsPerPageBtn />
      <Pagination />
    </div>
  );
};

export default TableFooter;
