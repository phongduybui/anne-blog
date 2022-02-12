import React, { useState } from 'react';
import clsx from 'clsx';
import { BiMenu, BiSearch } from 'react-icons/bi';
import Container from './Container';
import Link from 'next/link';
import Hero from './Hero';
import { ROUTES } from '../../constants/routes';
import Image from 'next/image';
import bgSkyImage from '../../public/images/bg-sky.jpg';

interface Props {
  isHome?: boolean;
}

const Header = ({ isHome }: Props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <Container
      className={clsx(
        'shadow',
        isHome && 'flex flex-col min-h-screen relative'
        // bg-[url('/images/bg-sky.jpg')]  bg-fixed bg-no-repeat bg-cover
      )}
    >
      {isHome && (
        <div className="absolute inset-0 -z-50 hero-img-container">
          <Image
            placeholder="blur"
            priority
            src={bgSkyImage}
            alt="img"
            width={1400}
            height={350}
            // layout="responsive"
            objectFit="cover"
          />
        </div>
      )}
      <nav className="py-8 border-gray-200 rounded dark:bg-gray-800">
        <div className=" flex flex-wrap justify-between items-center">
          <Link href="/">
            <a className="flex">
              <span
                className={clsx(
                  'self-center font-bold text-primary text-3xl whitespace-nowrap',
                  isHome && '!text-gray'
                )}
              >
                Anne.
              </span>
            </a>
          </Link>
          <div className="flex md:order-2">
            <div className=" relative mr-3 md:mr-0 md:block">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <BiSearch className="text-[#bbb]" />
              </div>
              <input
                type="text"
                id="email-adress-icon"
                className={clsx(
                  'block p-2 pl-10 w-full rounded-lg border sm:text-sm focus:ring-blue-500 focus:border-blue-500 outline-none border-gray-light',
                  isHome && 'bg-transparent !border-[#bbb] !text-[#bbb]'
                )}
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              onClick={() => setShowNavbar(!showNavbar)}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              <BiMenu className="text-2xl" />
            </button>
          </div>
          <div
            className={clsx(
              !showNavbar && 'hidden',
              'justify-between items-center w-full md:flex md:w-auto md:order-1'
            )}
            id="mobile-menu-3"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
              {ROUTES.map((route) => (
                <li key={route.label}>
                  <Link href={route.path}>
                    <a
                      className={clsx(
                        'block py-2 pr-4 pl-3 text-secondary border-b md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0',
                        isHome && 'text-gray md:hover:text-slate-400'
                      )}
                    >
                      {route.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {isHome && <Hero />}
    </Container>
  );
};

export default Header;
