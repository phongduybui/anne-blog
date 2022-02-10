import { GetStaticProps } from 'next';
import QueryString from 'qs';
import React from 'react';
import PrimaryContent from '../../components/PrimaryContent';
import { request } from '../../services/request';
import { Article } from './[slug]';
import { Category } from '../index';

interface Props {
  articles?: Article[];
  categories: Category[];
}

const ArticlesPage = ({ articles, categories }: Props) => {
  return <PrimaryContent articles={articles} categories={categories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const query = QueryString.stringify(
    {
      populate: {
        author: {
          populate: ['picture'],
        },
        image: '*',
        category: '*',
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const { data: res } = await request.get(`/articles?${query}`);
  const articles = res.data;
  const { data: categories } = await request.get('/categories');
  return {
    props: {
      articles,
      categories: categories.data,
    },
    revalidate: 10,
  };
};

export default ArticlesPage;
