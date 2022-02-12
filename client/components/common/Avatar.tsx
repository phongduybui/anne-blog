import Image from 'next/image';

interface Props {
  src: string;
}

const Avatar = ({ src }: Props) => {
  return (
    <div className="rounded-full w-[48px] h-[48px]">
      <Image
        src={src}
        alt="img"
        width={'100%'}
        height={'100%'}
        className="rounded-full opacity-90 hover:opacity-100 !border-2 !border-gray !border-solid"
      />
    </div>
  );
};

export default Avatar;
