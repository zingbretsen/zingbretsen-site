import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';

import 'highlight.js/styles/default.css';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import { useEffect } from 'react';

const Layout = ({
  children,
  banner,
  meta
}: {
  children: React.ReactNode;
  banner: string;
  meta: any;
}) => {
  const banner_class = typeof banner != 'undefined' ? 'alert alert-warning' : 'hidden';

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
      typeof meta.date != 'undefined' ? <p className="blogdate">Posted: {meta.date}</p> : <></>;
    tags =
      typeof meta.tags != 'undefined' ? (
        <p>
          Tags:{' '}
          {typeof meta.tags != 'undefined' ? (
            meta.tags.map((tag) => (
              <Link key={`/tags/${tag}`} href={`/tags/${tag}`} className="blog-tag">
                {tag}
              </Link>
            ))
          ) : (
            <></>
          )}
        </p>
      ) : (
        <></>
      );
  }

  const title: string = typeof meta?.title != 'undefined' ? meta.title : 'Zach Ingbretsen';
  return (
    <div id="app">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <script
          async
          src="https://us.umami.is/script.js"
          data-website-id="66715534-96cd-4cc8-8c0d-1c9e3877b481"
        ></script>
      </Head>
      <Header />
      <div className={banner_class}>{banner}</div>
      <div className="container">
        <article>
          {typeof meta !== 'undefined' ? (
            <>
              <h1 className="blogtitle">{title}</h1>
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
