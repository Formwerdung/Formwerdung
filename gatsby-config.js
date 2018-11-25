module.exports = {
  siteMetadata: {
    title: 'Formwerdung | Web Design und Development aus der Schweiz',
    author: 'Formwerdung',
    description: 'Web Design und Development aus der Schweiz.',
    siteUrl: 'https://formwerdung.ch',
  },
  plugins: [
    'gatsby-plugin-flow',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `case-study`,
        path: `${__dirname}/src/pages/case-study`,
      },
    },
    /*{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },*/
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/pages/portfolio`,
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
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    /* `gatsby-plugin-feed`, */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Formwerdung | Web Development`,
        short_name: `Formwerdung`,
        start_url: `/`,
        background_color: `#fffefc`,
        theme_color: `#11519a`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://formwerdung.ch`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-83438388-1",
      },
    },
    /* {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-MNG2RR9",
      },
    }, */
  ]
};
