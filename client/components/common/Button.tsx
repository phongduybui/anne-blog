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
      className={clsx(
        'py-3 px-9 text-base font-medium text-white bg-primary rounded-full hover:bg-secondary',
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
