import Image from 'next/image';
import Container from '../../components/layout/Container';
import ReactMarkdown from 'react-markdown';
import { GetStaticPaths, GetStaticProps } from 'next';
import { request } from '../../services/request';
import { getImagePath } from '../../utils/image';
import { formatTime, getReadingTime } from '../../utils/time';
import Breadcrumb from '../../components/common/Breadcrumb';

export interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    content: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author: Author;
    image: {
      data: {
        attributes: {
          url: string;
          formats: {
            thumbnail: {
              url: string;
            };
          };
        };
      };
    };
    category: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
  };
}

export interface AttributesAuthor {
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  picture: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

export interface Author {
  data: {
    id: number;
    attributes: AttributesAuthor;
  };
}

const ArticlePage = ({ article }: { article: Article }) => {
  const articleData = article?.attributes;
  return (
    <Container className="bg-semi-gray py-16">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="/articles">Articles</Breadcrumb.Item>
        <Breadcrumb.Item href={`/articles/${article?.id}`} isCurrent>
          {articleData?.title?.length > 60
            ? articleData?.title?.substring(0, 60) + '...'
            : articleData?.title}
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex justify-center">
        <Image
          src={getImagePath(articleData?.image?.data?.attributes?.url)}
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
            {articleData?.title}
          </h1>
          <div className="flex text-secondary pb-8 mb-8 border-b-2 border-stone-200">
            <p>
              By{' '}
              <span className="font-bold text-secondary hover:text-primary">
                {articleData?.author?.data?.attributes?.name}
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
            <p>{formatTime(articleData?.publishedAt)}</p>
            <span className="text-red-500 px-1">・</span>
            <p className="text-red-500 font-bold">
              {getReadingTime(articleData?.title, articleData?.content)}
            </p>
          </div>
        </div>
        {/* Article Content */}
        <div className="">
          <ReactMarkdown>{articleData?.content}</ReactMarkdown>
        </div>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: articles } = await request.get('/articles');
  const paths = articles?.data.map((article: Article) => {
    return {
      params: {
        id: String(article.id),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { data: res } = await request.get(
      `/articles/${context.params?.id}?populate=*`
    );
    const article = res.data;
    console.log({ article });
    return {
      props: {
        article,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        article: null,
      },
    };
  }
};

export default ArticlePage;
