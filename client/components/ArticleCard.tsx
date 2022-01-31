import Image from 'next/image';
import Avatar from './common/Avatar';
import Tag from './common/Tag';
import { BsClock } from 'react-icons/bs';

const ArticleCard = () => {
  return (
    <div className="bg-white flex items-center p-2 m-2 rounded-md hover:-translate-y-1 hover:shadow-md linear duration-300 cursor-pointer">
      <Image
        src="/images/anh_square.jpg"
        alt="img"
        width={1200}
        height={1000}
        className="rounded-md "
      />
      <div className="flex flex-col items-start ml-4 p-4">
        <Tag>Advertising</Tag>
        <h3 className="text-semi-black font-bold text-xl mt-3 line-clamp-1">
          Markdown Language Sample Blog
        </h3>
        <p className="text-secondary font-sm text-sm mt-5 line-clamp-2">
          Markdown is a lightweight markup language with plain-text-formatting
          syntax. Its design allows it to be converted to many output formats,
          but the original tool by the same name only supports HTML. Markdown is
          often used to format readme files, for writing messages in online
          discussion forums, and to create rich text using a plain text editor
        </p>
        <div className="flex mt-4">
          <Avatar />
          <div className="flex flex-col justify-center pl-4 ">
            <h4 className="text-secondary font-bold text-sm mb-1 hover:text-primary">
              Hoang An Le Vo
            </h4>

            <div className="flex items-center text-gray-light font-normal text-sm">
              <span> Jan 31, 2022 </span>
              <span className="px-2">-</span>
              <span className="flex items-center">
                <BsClock className="mr-2" /> 1 min
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
