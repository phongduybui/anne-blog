/* eslint-disable react/no-children-prop */
import Image from 'next/image';
import Container from '../../components/layout/Container';
import { GetStaticPaths, GetStaticProps } from 'next';
import { request } from '../../services/request';
import { getImagePath } from '../../utils/image';
import { formatTime, getReadingTime } from '../../utils/time';
import Breadcrumb from '../../components/common/Breadcrumb';
import MarkdownViewer from '../../components/MarkdownViewer';
import useSWR from 'swr';

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
    image: Image;
    category: {
      data: {
        attributes: {
          name: string;
        };
      };
    };
  };
}

interface Image {
  data: {
    attributes: {
      url: string;
      formats: {
        thumbnail: {
          url: string;
        };
        small: {
          url: string;
        };
        medium: {
          url: string;
        };
        large: {
          url: string;
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
  picture: Image;
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
    <Container className="bg-semi-gray py-16 ">
      <Breadcrumb className="mb-4">
        <Breadcrumb.Item href="/articles">Articles</Breadcrumb.Item>
        <Breadcrumb.Item href={`/articles/${articleData?.slug}`} isCurrent>
          {articleData?.title?.length > 60
            ? articleData?.title?.substring(0, 60) + '...'
            : articleData?.title}
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex justify-center shadow-sm relative">
        <div className="absolute inset-0 z-50 bg-slate-900 opacity-20 rounded-t-3xl" />
        <Image
          src={getImagePath(articleData?.image?.data?.attributes?.url)}
          alt="img"
          width={1400}
          height={350}
          // layout="responsive"
          objectFit="cover"
          className="rounded-t-3xl"
        />
      </div>
      <div className="bg-white py-8 px-16 shadow-sm">
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
        <div id="viewer">
          <MarkdownViewer content={articleData?.content} />
        </div>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: articles } = await request.get('/articles');
  const paths = articles?.data?.map((article: Article) => {
    return {
      params: {
        slug: article.attributes.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data: res } = await request.get(
    `/articles?filters[slug][$eq]=${context.params?.slug}&populate=*`
  );
  return {
    props: {
      article: res.data?.[0],
      fallback: {
        '/test': [1, 1, 1, 4],
      },
    },
    revalidate: 10,
  };
};

export default ArticlePage;
