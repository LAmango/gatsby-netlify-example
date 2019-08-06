/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
};

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My Title`,
  },
  plugins: [
    netlifyCmsPaths,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-eslint",
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/cms/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 930,
              backgroundColor: "transparent", // required to display blurred image first
            },
          },
        ],
      },
    },
  ],
};
