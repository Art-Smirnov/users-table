import React from 'react';
// @ts-ignore
import { ReactComponent as LoaderIcon } from '../../icons/loader.svg';
// @ts-ignore
import { ReactComponent as ExclamationIcon } from '../../icons/exclamation.svg';
// @ts-ignore
import { ReactComponent as QuestionIcon } from '../../icons/question.svg';

interface BannerProps {
  type: 'loading' | 'not-found' | 'error';
}

const Banner: React.FC<BannerProps> = ({ type }) => {
  let message = '';
  let Icon: React.JSX.Element | null = null;
  let bgColor = '';

  switch (type) {
    case 'loading':
      message = 'Loading Page';
      Icon = <LoaderIcon className="animate-spin" />;
      bgColor = 'bg-green';
      break;
    case 'not-found':
      message = 'Not Found';
      Icon = <QuestionIcon />;
      bgColor = 'bg-yellow';
      break;
    case 'error':
      message = 'Opps, something went wrong';
      Icon = <ExclamationIcon />;
      bgColor = 'bg-red';
      break;
    default:
      break;
  }

  return (
    <div
      className="absolute inset-0 mx-auto my-auto flex
        items-center justify-center flex-col gap-[1.31rem]">
      <div
        className={`${bgColor} h-[4.4375rem] w-[4.4375rem] border rounded-full
          flex items-center justify-center`}>
        {Icon}
      </div>
      <h2 className="font-semibold text-xl text-darkGray leading-5">
        {message}
      </h2>
    </div>
  );
};

export default Banner;
