import TableHead from './TableHead';
import TableFooter from './TableFooter';
import TableBody from './TableBody';

const UsersTable = () => {
  return (
    <>
      <div className="overflow-x-auto h-[38.5rem] border border-light rounded-t-xl">
        <table className="table table-pin-rows table-pin-cols border-hidden ">
          <TableHead />
          <TableBody />
        </table>
      </div>
      <TableFooter />
    </>
  );
};

export default UsersTable;
