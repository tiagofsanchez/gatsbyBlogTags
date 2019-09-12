/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Testing what I am learning",
    description: "trying to render tags in different pages and manage that programatically",
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        name: 'pages', 
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
