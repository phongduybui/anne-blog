import ArticleCard from './ArticleCard';
import TopicTag from './common/TopicTag';
import Container from './layout/Container';
import {
  RiAdvertisementFill,
  RiYoutubeFill,
  RiFacebookCircleFill,
  RiInstagramFill,
} from 'react-icons/ri';
import { MdOutlineDocumentScanner, MdTipsAndUpdates } from 'react-icons/md';
import Tag from './common/Tag';
import SocialIcon from './common/SocialIcon';
import Button from './common/Button';
import Pagination from 'rc-pagination';
import { GetStaticProps } from 'next';
import { request } from '../services/request';
import { Article } from '../pages/articles/[id]';
import Link from 'next/link';

interface Props {
  articles?: Article[];
}

const PrimaryContent = ({ articles }: Props) => {
  return (
    <Container className="bg-semi-gray py-16">
      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-8">
          <h2 className="border-l-8 border-gray font-bold text-2xl text-semi-black pl-8 mb-12">
            Recently Published
          </h2>
          <div className="flex flex-col">
            {articles?.map((article) => (
              <Link href={`/articles/${article.id}`} key={article.id}>
                <a>
                  <ArticleCard article={article} />
                </a>
              </Link>
            ))}
          </div>
          <Pagination
            className="ant-pagination text-right my-4"
            current={1}
            total={450}
          />
        </div>
        <div className="col-span-4">
          <div className="mb-14">
            <h2 className=" font-bold text-2xl text-secondary pl-8 mb-14">
              Topics
            </h2>
            <div>
              <TopicTag
                topic="Case Studies"
                icon={<MdOutlineDocumentScanner />}
              />
              <TopicTag topic="Advertising" icon={<RiAdvertisementFill />} />
              <TopicTag topic="Innovation" icon={<MdTipsAndUpdates />} />
            </div>
          </div>

          <div className="mb-14">
            <h2 className=" font-bold text-2xl text-secondary pl-8 mb-14">
              Tags
            </h2>
            <div className="flex flex-wrap ">
              {[...new Array(8)].map((_, i) => (
                <Tag hashtag className="mr-2 mb-2" key={i}>
                  tutorial
                </Tag>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className=" font-bold text-2xl text-secondary pl-8 mb-14">
              Let&apos;s Talk
            </h2>
            <div className="bg-white p-8 rounded-md">
              <p className="text-secondary">
                Want to find out how I can solve problems specific to your
                business? Let&apos;s talk.
              </p>
              <div className="flex justify-center flex-wrap space-x-2 mt-4">
                <SocialIcon icon={<RiFacebookCircleFill />} />
                <SocialIcon icon={<RiYoutubeFill />} />
                <SocialIcon icon={<RiInstagramFill />} />
              </div>
            </div>
          </div>

          <div className="mb-14">
            <h2 className=" font-bold text-2xl text-secondary pl-8 mb-14">
              Newsletter
            </h2>
            <div className="bg-white p-8 rounded-md">
              <p className="text-secondary mb-4">
                Make sure to subscribe to our newsletter and be the first to
                know the news.
              </p>
              <input
                type="text"
                placeholder="Email Address"
                className="bg-gray outline-none p-2 px-3 w-full rounded-md mb-4"
              />
              <div className="flex justify-center">
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PrimaryContent;
