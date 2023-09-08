// @ts-ignore
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
// @ts-ignore
import { ReactComponent as LastChevronIcon } from '../../icons/lastChevron.svg';

const Pagination = () => {
  return (
    <div className="flex gap-[.12rem]">
      <button
        disabled
        className="btn btn-sm h-9 bg-transparent border-transparent p-2
        disabled:bg-transparent disabled:opacity-30">
        <LastChevronIcon className="rotate-180" />
      </button>
      <button
        disabled
        className="btn btn-sm h-9 bg-transparent border-transparent p-2
        disabled:bg-transparent disabled:opacity-30">
        <ChevronIcon className="rotate-180" />
      </button>
      <input
        value={1}
        className="btn btn-sm text-[0.8125rem] bg-darkerGray border-light
          font-normal h-9 w-16 text-gray"
      />
      <button className="btn btn-sm h-9 bg-transparent border-transparent p-2">
        <ChevronIcon />
      </button>
      <button
        className="btn btn-sm h-9 bg-transparent border-transparent p-2
        disabled:bg-transparent disabled:opacity-50">
        <LastChevronIcon />
      </button>
    </div>
  );
};

export default Pagination;
