import { GetStaticProps } from 'next';
import qs from 'qs';
import React, { useState } from 'react';
import PrimaryContent from '../../components/PrimaryContent';
import { fetcher, request } from '../../services/request';
import { Article } from './[slug]';
import { Category, Data } from '../index';
import useSWR from 'swr';
import { queryArticles } from '../../constants/queries';

interface Props {
  articles: Data<Article[]>;
  categories: Data<Category[]>;
}

const ArticlesPage = ({ articles, categories }: Props) => {
  const [page, setPage] = useState(1);
  const query = queryArticles({ page });

  const { data: articlesData } = useSWR<Data<Article[]>>(
    `/articles?${query}`,
    fetcher,
    {
      fallbackData: articles,
    }
  );
  const { data: categoriesData } = useSWR<Data<Category[]>>(
    '/categories',
    fetcher,
    {
      fallbackData: categories,
    }
  );

  const onPageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <PrimaryContent
      articlesData={articlesData}
      categoriesData={categoriesData}
      page={page}
      onPageChange={onPageChange}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const query = queryArticles({ page: 1 });
  const { data: articles } = await request.get(`/articles?${query}`);
  const { data: categories } = await request.get('/categories');
  return {
    props: {
      articles,
      categories,
    },
    revalidate: 10,
  };
};

export default ArticlesPage;
