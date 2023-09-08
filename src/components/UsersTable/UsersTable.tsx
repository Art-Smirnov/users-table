import TableHead from './TableHead';
import TableFooter from './TableFooter';
import TableBody from './TableBody';

const UsersTable = () => {
  return (
    <div className="border border-light rounded-xl">
      <div className="overflow-x-auto max-h-[34.75rem]">
        <table className="table table-pin-rows table-pin-cols border-hidden">
          <TableHead />
          <TableBody />
        </table>
      </div>
      <TableFooter />
    </div>
  );
};

export default UsersTable;
