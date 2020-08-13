module.exports = {
  siteMetadata: {
    title: `Zach Overflow`,
    description: `Personal site of Zach Ingbretsen`,
    author: `@zingbretsen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `@gatsby-contrib/gatsby-transformer-ipynb`,
      {
          resolve: `gatsby-transformer-remark`,
          options: {
              // CommonMark mode (default: true)
              commonmark: true,
              // Footnotes mode (default: true)
              footnotes: true,
              // Pedantic mode (default: true)
              pedantic: true,
              // GitHub Flavored Markdown mode (default: true)
              gfm: true,
              // Plugins configs
              plugins: [],
          },
      },      {
          resolve: `gatsby-plugin-page-creator`,
          options: {
              path: `${__dirname}/src/blog/pages`,
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `markdown`,
              path: `${__dirname}/src/blog`,
          },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
