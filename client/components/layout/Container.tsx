import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx('w-full min-w-full mx-auto px-8 sm:px-16', className)}>
      {children}
    </div>
  );
};

export default Container;
