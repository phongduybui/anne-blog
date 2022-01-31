import Image from 'next/image';
import Container from '../../components/layout/Container';
import ReactMarkdown from 'react-markdown';

const Article = () => {
  return (
    <Container className="bg-semi-gray py-16">
      <div className="flex justify-center">
        <Image
          src="/images/anh_square.jpg"
          alt="img"
          width={1400}
          height={450}
          // layout="responsive"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="bg-white py-8 px-16">
        {/* Article Info */}
        <div className="mb-16">
          <h1 className="font-black text-5xl text-semi-black mb-4">
            7 Effective Exercises You Should Be Doing
          </h1>
          <div className="flex text-secondary pb-8 mb-8 border-b-2 border-stone-200">
            <p>
              By{' '}
              <span className="font-bold text-secondary hover:text-primary">
                Hoang An Le Vo
              </span>
            </p>
            <span className="px-1">・</span>
            <p>
              Published in{' '}
              <span className="font-bold text-secondary hover:text-primary">
                Living Healthy
              </span>
            </p>
            <span className="px-1">・</span>
            <p>April 16, 2022</p>
            <span className="text-red-500 px-1">・</span>
            <p className="text-red-500 font-bold">1 min read</p>
          </div>
        </div>
        {/* Article Content */}
        <div className="">
          <ReactMarkdown>**TExt**</ReactMarkdown>
        </div>
      </div>
    </Container>
  );
};

export default Article;
