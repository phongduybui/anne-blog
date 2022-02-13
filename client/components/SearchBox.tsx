import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import debounce from 'lodash.debounce';
import { request } from '../services/request';
import { queryArticlesByTerm } from '../constants/queries';
import { Article } from '../pages/articles/[slug]';
import { Data } from '../pages';
import MiniArticleCard from './MiniArticleCard';
import Link from 'next/link';

interface Props {
  isHome?: boolean;
}

const SearchBox = ({ isHome }: Props) => {
  const [term, setTerm] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value.trim());
  };

  const fetchArticles = async (term: string, cb: Function) => {
    const query = queryArticlesByTerm(term);
    const res = await request.get<Data<Article[]>>(`/articles?${query}`);
    cb(res);
  };

  const debouncedFetchArticles = debounce((term: string, cb: Function) => {
    fetchArticles(term, cb);
  }, 500);

  useEffect(() => {
    if (term) {
      debouncedFetchArticles(term, (res: any) => {
        setArticles(res?.data?.data);
      });
    } else {
      setArticles([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  console.log(articles);

  return (
    <>
      <div className="relative mr-3 md:mr-0 md:block">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <BiSearch className="text-[#bbb]" />
        </div>
        <input
          type="text"
          value={term}
          onChange={handleTermChange}
          className={clsx(
            'search-input block p-2 pl-10 w-full rounded-lg border sm:text-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-gray-light',
            isHome && 'bg-transparent !border-[#bbb] !text-[#bbb]'
          )}
          placeholder="Search..."
        />
        {articles?.length > 0 && (
          <div className="hidden z-50 absolute top-12 -left-32 right-0 py-4 px-6 bg-gray shadow-md rounded-md search-results max-h-[460px] overflow-y-auto">
            <h3 className="ml-2">{`Results: ${articles.length} items`}</h3>
            {articles.map((article) => (
              <Link
                href={`/articles/${article.attributes.slug}`}
                key={article.id}
              >
                <a>
                  <MiniArticleCard article={article} />
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBox;
