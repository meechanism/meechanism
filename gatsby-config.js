module.exports = {
  siteMetadata: {
    title: `Meechanism`,
    author: `Mee Cha`,
    description: `Digital dump of a Hmong-American frontend engineer`,
    siteUrl: `https://www.meechanism.com`,
    social: {
      email: "mee.cha.nism@gmail.com",
      instagram: "https://www.instagram.com/meechanism",
      github: "https://github.com/meechanism",
      linkedin: "https://www.linkedin.com/in/meecha",
    },
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-vscode`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: `UA-120604235-2`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Meechanism`,
        short_name: `Meechanism`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ed1a3e`,
        display: `minimal-ui`,
        // edit below
        icon: `content/assets/mee-logo-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
