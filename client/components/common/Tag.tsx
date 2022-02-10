import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  hashtag?: boolean;
  className?: string;
}

const Tag = ({ children, hashtag, className }: Props) => {
  return (
    <div
      className={clsx(
        'bg-gray hover:bg-secondary text-secondary hover:text-gray py-1 px-4 rounded-md text-sm font-medium',
        className
      )}
    >
      {hashtag && '#'}
      {children}
    </div>
  );
};

export default Tag;
