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
        className="p-2 menu dropdown-content z-[1] text-darkGray
          bg-base-100 w-[14.25rem] rounded-xl mt-[.44rem]
          border border-light shadow-m normal-case font-normal text-[.8125rem]">
        <li>
          <label className="cursor-pointer flex items-center justify-between h-8">
            <span className="text-black leading-5 ">Full name</span>
            <input checked type="checkbox" readOnly />
          </label>
        </li>

        <li>
          <label className="cursor-pointer flex items-center justify-between h-8">
            <span className="text-black leading-5">Birthday</span>
            <input checked type="checkbox" readOnly />
          </label>
        </li>

        <li>
          <label className="cursor-pointer flex items-center justify-between h-8">
            <span className="text-black leading-5">Gender</span>
            <input checked type="checkbox" readOnly />
          </label>
        </li>
      </ul>
    </div>
  );
};

export default TableSettings;
