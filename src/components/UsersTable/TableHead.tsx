import { memo } from 'react';
import TableSettings from './TableSettings';
import { useSelector } from 'react-redux';
import { selectSortedSelectedColumns } from '../../store/users/usersSelectors';
import { USER_COLUMNS } from '../../utils/constants';

const TableHead = () => {
  const selectedColumns = useSelector(selectSortedSelectedColumns);

  return (
    <thead className="bg-lightSecond text-[0.625rem] font-semibold">
      <tr className="uppercase bg-lightSecond text-gray leading-3 tracking-[.0125rem]">
        <th className="h-7 p-0 bg-lightSecond">
          <div className="px-2 py-[0.38rem] h-full border-r border-r-light">
            full Name
          </div>
        </th>
        {selectedColumns.map((column) => {
          return (
            <td
              key={column}
              className="border-r border-r-light px-2 py-[0.38rem]">
              {USER_COLUMNS[column as keyof typeof USER_COLUMNS]}
            </td>
          );
        })}

        <th className="p-0">
          <TableSettings />
        </th>
      </tr>
    </thead>
  );
};

export default memo(TableHead);
