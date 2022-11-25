import React from 'react';
import PropTypes from 'prop-types';

function SEO({ description, lang, meta, title }) {
  const site = {
    title: 'zingbretsen',
    description: '',
    author: 'Zach Ingbretsen',
    twitter: 'https://zingbretsen.com',
    linkedin: 'https://www.linkedin.com/in/zingbretsen/'
  };

  const metaDescription = description || site.description;

  // <Helmet
  //   htmlAttributes={{
  //     lang
  //   }}
  //   title={title}
  //   titleTemplate={`%s | ${site.title}`}
  //   meta={[
  //     {
  //       name: `description`,
  //       content: metaDescription
  //     },
  //     {
  //       property: `og:title`,
  //       content: title
  //     },
  //     {
  //       property: `og:description`,
  //       content: metaDescription
  //     },
  //     {
  //       property: `og:type`,
  //       content: `website`
  //     },
  //     {
  //       name: `twitter:card`,
  //       content: `summary`
  //     },
  //     {
  //       name: `twitter:creator`,
  //       content: site.twitter
  //     },
  //     {
  //       name: `twitter:title`,
  //       content: title
  //     },
  //     {
  //       name: `twitter:description`,
  //       content: metaDescription
  //     }
  //   ].concat(meta)}
  // />
  return <></>;
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
