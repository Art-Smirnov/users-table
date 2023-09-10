import TableFooter from './TableFooter';
import Table from './Table';

const UsersTable = () => {
  return (
    <>
      <div
        className="relative overflow-auto h-[38.5rem] border border-light rounded-t-xl
          bg-anotherLight">
        <Table />
      </div>
      <TableFooter />
    </>
  );
};

export default UsersTable;
