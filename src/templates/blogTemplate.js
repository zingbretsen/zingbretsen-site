import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/layout';

export default function Template({ data }) {
  const { mdx } = data;
  const { frontmatter, body, excerpt } = mdx;
  return (
    <Layout title={frontmatter.title} description={excerpt}>
      <article>
        <h1 className="blogtitle">{frontmatter.title}</h1>
        <p className="blogdate">{frontmatter.date}</p>
        {frontmatter.edit ? <p className="edit-message">{'Edit: ' + frontmatter.edit}</p> : <></>}
        <div className="tags">
          <span>Tags: </span>
          {frontmatter.tags.map((tag) => (
            <Link className="blog-tag" key={tag} to={'/tags/' + tag}>
              {tag}
            </Link>
          ))}
        </div>
        <MDXRenderer className="blog-post-content">{body}</MDXRenderer>
      </article>

      <hr />
      {/* Begin mailchimp signup */}
      <link
        href="//cdn-images.mailchimp.com/embedcode/slim-10_7_dtp.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <form
          action="https://zingbretsen.us6.list-manage.com/subscribe/post?u=fef813a327f4c512e05fa16e1&amp;id=6d39e25b87"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate>
          <div id="mc_embed_signup_scroll">
            <div
              id="mergeRow-gdpr"
              className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"></div>
            <div className="content__gdpr">
              <p>
                You can unsubscribe at any time by clicking the link in the footer of our emails.
              </p>
              <div className="content__gdprLegal">
                <p>
                  I use Mailchimp as our marketing platform. By clicking below to subscribe, you
                  acknowledge that your information will be transferred to Mailchimp for processing.{' '}
                  <a rel="noreferrer" href="https://mailchimp.com/legal/terms" target="_blank">
                    Learn more about Mailchimp&apos;s privacy practices here.
                  </a>
                </p>
              </div>
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input
                type="text"
                name="b_fef813a327f4c512e05fa16e1_6d39e25b87"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
                <p className="brandingLogo">
                  <a
                    href="http://eepurl.com/hQ5j0P"
                    title="Mailchimp - email marketing made easy and fun">
                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* End mailchimp signup */}

      <div className="blog-link">
        <Link to="/blog">Go back to the blog</Link>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        edit
        tags
      }
    }
  }
`;
