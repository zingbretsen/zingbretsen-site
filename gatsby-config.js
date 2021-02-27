module.exports = {
  siteMetadata: {
    title: `Zach Overflow`,
    description: `Personal site of Zach Ingbretsen`,
    author: `@zingbretsen`,
    twitter: `@zingbretsen`,
    linkedin: `https://www.linkedin.com/in/zingbretsen/`,
    siteUrl: 'https://zingbretsen.com'
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: 'carbon',
              theme: 'a11y-dark'
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1600
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zach Overflow`,
        short_name: `zingbretsen`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/z.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
