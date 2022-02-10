import Image from 'next/image';
import Avatar from './common/Avatar';
import Tag from './common/Tag';
import { BsClock } from 'react-icons/bs';
import { Article } from '../pages/articles/[slug]';
import { getImagePath } from '../utils/image';
import { formatTime, getReadingTime } from '../utils/time';

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  const articleData = article?.attributes;
  // console.log(articleData);

  return (
    <div className="bg-white flex items-center p-2 m-2 rounded-md hover:-translate-y-1 hover:shadow-md linear duration-300 cursor-pointer">
      <div className="w-[220px] h-[180px]">
        <Image
          src={getImagePath(articleData?.image?.data?.attributes?.url)}
          alt="img"
          width={220}
          height={180}
          objectFit="cover"
          layout="fixed"
          className="rounded-md "
        />
      </div>
      <div className="flex flex-col items-start ml-4 p-4">
        <Tag className="capitalize">
          {articleData?.category?.data?.attributes?.name ?? 'Freestyle'}
        </Tag>
        <h3 className="text-semi-black font-bold text-xl mt-3 line-clamp-1">
          {articleData?.title}
        </h3>
        <p className="text-secondary font-sm text-sm mt-5 line-clamp-2">
          {articleData?.description}
        </p>
        <div className="flex mt-4">
          <Avatar
            src={getImagePath(
              articleData?.author?.data?.attributes?.picture?.data?.attributes
                ?.url
            )}
          />
          <div className="flex flex-col justify-center pl-4 ">
            <h4 className="text-secondary font-bold text-sm mb-1 hover:text-primary">
              {articleData?.author?.data?.attributes?.name}
            </h4>

            <div className="flex items-center text-gray-light font-normal text-sm">
              <span>{formatTime(articleData?.publishedAt)}</span>
              <span className="px-2">-</span>
              <span className="flex items-center">
                <BsClock className="mr-2" />{' '}
                {getReadingTime(articleData?.title, articleData?.content)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
