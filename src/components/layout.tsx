import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';

import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect } from 'react';

const Layout = ({
  children,
  banner,
  meta,
  title
}: {
  children: React.ReactNode;
  banner?: string;
  meta?: any;
  title?: string;
}) => {
  const banner_class =
    typeof banner != 'undefined'
      ? 'bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4'
      : 'hidden';

  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('bash', bash);
  hljs.registerLanguage('python', python);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  let posted_date = <></>;
  let tags = <></>;

  if (typeof meta != 'undefined') {
    posted_date =
      typeof meta.date != 'undefined' ? (
        <p className="mb-4 text-gray-700">Posted: {meta.date}</p>
      ) : (
        <></>
      );
    tags =
      typeof meta.tags != 'undefined' ? (
        <div className="mb-4">
          <span className="text-gray-700">Tags: </span>
          {typeof meta.tags != 'undefined' ? (
            meta.tags.map((tag) => (
              <Link
                key={`/tags/${tag}`}
                href={`/tags/${tag}`}
                className="mr-2 text-[var(--viridis-2)] hover:text-[var(--viridis-1)]"
              >
                {tag}
              </Link>
            ))
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      );
  }

  const blog_title: string = typeof meta?.title != 'undefined' ? meta.title : 'Zach Ingbretsen';
  return (
    <div
      id="app"
      className="h-screen grid grid-cols-1 grid-rows-[auto_1fr_auto] grid-areas-[header_main_footer]"
    >
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <div className={banner_class}>{banner}</div>
      <div className="text-[#000000cc] max-w-[60rem] px-8 mx-auto mt-0">
        <article>
          {typeof meta !== 'undefined' ? (
            <>
              <h1 className="mt-4 text-2xl font-bold">{blog_title}</h1>
              {posted_date}
              {tags}
            </>
          ) : (
            <></>
          )}
          {children}
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
