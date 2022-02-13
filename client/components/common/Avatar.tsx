import Image from 'next/image';

interface Props {
  src: string;
  blurDataURL: string;
  size?: number;
}

const Avatar = ({ src, blurDataURL, size = 48 }: Props) => {
  return (
    <Image
      placeholder="blur"
      blurDataURL={blurDataURL}
      src={src}
      alt="img"
      width={size}
      height={size}
      className="rounded-full opacity-90 hover:opacity-100 !border-2 !border-gray !border-solid"
    />
  );
};

export default Avatar;
