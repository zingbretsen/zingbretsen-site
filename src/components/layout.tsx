import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';
// import SEO from './seo.js';

const Layout = ({ children, banner, meta }) => {
  const banner_class = typeof banner != 'undefined' ? 'alert alert-warning' : 'hidden';
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
                <a className="blog-tag">{tag}</a>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
