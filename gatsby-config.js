module.exports = {
  siteMetadata: {
    title: `Levan K.`,
    twitterHandle: '@levanisart',
    occupation: `UI/UX Product Designer & Front-end Developer`,
    url: `https://levanisart.com`,
    image: `${__dirname}/src/images/levanisart.png`,
    author: `Levani`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Levan K. Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      },
    },
    `gatsby-plugin-offline`
  ],
}
