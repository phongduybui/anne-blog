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
        'py-3 px-8 text-base font-medium text-white bg-primary rounded-full hover:bg-secondary',
        bordered && 'bg-gray-400',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
