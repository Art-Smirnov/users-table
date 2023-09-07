const TableHead = () => {
  return (
    <thead className="bg-lightSecond text-[0.625rem] font-semibold">
      <tr className="uppercase bg-lightSecond text-gray leading-3 tracking-[.0125rem]">
        <th className="h-7 p-0 bg-lightSecond">
          <div className="px-2 py-[0.38rem] h-full border-r border-r-light">
            full Name
          </div>
        </th>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Birthday</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Gender</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Email</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Phone</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Usename</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">
          General info
        </td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Domain</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">IP</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Mac ip</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Address</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Bank</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">
          University
        </td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">Company</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">ein</td>
        <td className="border-r border-r-light px-2 py-[0.38rem]">ssn</td>
        <th className="border-t border-light bg-lightSecond px-2 py-[0.38rem]">
          X
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
