import QueryString from 'qs';

interface QueryArticlesParams {
  page: number;
  pageSize?: number;
}

export const queryArticles = ({ page, pageSize = 10 }: QueryArticlesParams) => {
  return QueryString.stringify(
    {
      populate: {
        author: {
          populate: ['picture'],
        },
        image: '*',
        category: '*',
      },
      pagination: {
        page,
        pageSize,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
};
