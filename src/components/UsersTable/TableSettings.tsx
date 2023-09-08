// @ts-ignore
import { ReactComponent as SettingsIcon } from '../../icons/settings.svg';

const TableSettings = () => {
  return (
    <div
      className="dropdown dropdown-end border-l border-l-light
        h-7 pl-[.30rem] py-[.12rem] pr-1">
      <label
        tabIndex={0}
        className="btn btn-xs h-6 w-6 bg-transparent border-transparent
          p-1 rounded-full">
        <SettingsIcon />
      </label>
      <ul
        tabIndex={0}
        className="p-2 shadow-2xl menu dropdown-content z-[1]
            bg-base-100 rounded-box w-52">
        <li>
          <label className="cursor-pointer flex items-center justify-between">
            <span className="text-xs text-black leading-5">10</span>
            <input type="checkbox" value={10} />
          </label>
        </li>
        <li>
          <label className="cursor-pointer flex items-center justify-between">
            <span className="text-xs text-black leading-5">20</span>
            <input type="checkbox" value={20} />
          </label>
        </li>

        <li>
          <label className="cursor-pointer flex items-center justify-between">
            <span className="text-xs text-black leading-5">50</span>
            <input type="checkbox" value={50} />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default TableSettings;
