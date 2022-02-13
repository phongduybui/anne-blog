import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

const Button = ({ children, className, bordered }: Props) => {
  return (
    <button
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className={clsx(
        'py-3 px-9 text-base font-semibold text-white bg-primary rounded-full hover:bg-secondary inline-block leading-tight   shadow-md hover:shadow-lg focus:bg-indigo-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-700 active:shadow-lg transition duration-150 ease-in-out capitalize',
        bordered &&
          'bg-gray-light text-secondary border-2 border-inherit hover:bg-gray-light hover:border-primary',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
