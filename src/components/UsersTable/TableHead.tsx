import { memo } from 'react';
import TableSettings from './TableSettings';
import { useSelector } from 'react-redux';
import { selectSortedSelectedColumns } from '../../store/users/usersSelectors';
import { USER_COLUMNS_TITLES_SCHEMA } from '../../utils/constants';

const TableHead = () => {
  const selectedColumns = useSelector(selectSortedSelectedColumns);

  return (
    <thead className="bg-lightSecond text-[0.625rem] font-semibold">
      <tr className="uppercase bg-lightSecond text-gray tracking-[.0125rem]">
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
              {
                USER_COLUMNS_TITLES_SCHEMA[
                  column as keyof typeof USER_COLUMNS_TITLES_SCHEMA
                ]
              }
            </td>
          );
        })}

        <th className="p-0 w-[2.125rem]">
          <TableSettings />
        </th>
      </tr>
    </thead>
  );
};

export default memo(TableHead);
