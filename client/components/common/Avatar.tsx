import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="rounded-full w-[48px] h-[48px] p-1 bg-gray">
      <Image
        src="/images/anh_square.jpg"
        alt="img"
        width={'100%'}
        height={'100%'}
        className="rounded-full opacity-90 hover:opacity-100"
      />
    </div>
  );
};

export default Avatar;
