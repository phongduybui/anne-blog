import Image from 'next/image';

interface Props {
  src: string;
  blurDataURL: string;
}

const Avatar = ({ src, blurDataURL }: Props) => {
  return (
    <div className="rounded-full w-[48px] h-[48px]">
      <Image
        placeholder="blur"
        blurDataURL={blurDataURL}
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
