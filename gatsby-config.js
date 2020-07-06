module.exports = {
  siteMetadata: {
    title: `Levan K.`,
    twitterHandle: '@levanisart',
    occupation: `UI/UX Product Designer & Front-end Developer specializing in Shopify`,
    url: `https://levanisart.com`,
    author: `Levani`,
    image: `https://i.ibb.co/wBnvggV/LA.png`
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
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              quality: 100
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148943999-1",
      },
    },
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
        background_color: `#FFF`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`
      },
    },
    `gatsby-plugin-offline`
  ],
}
