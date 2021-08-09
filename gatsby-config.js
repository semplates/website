require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Semplates`,
    seoTitle: `Semplates | Simple Email Templates for AWS SES`,
    description: `Design & maintain your AWS SES email templates with Semplates. Add placeholders for personalized emails. Then send your emails for a fraction of the costs of conventional emailing services.`,
    author: `cdieffendahl`,
    keywords: [
      'AWS SES',
      'SES Templates',
      'SES Template Editor',
      'Email Templates',
      'Email Template Design',
      'Transactional emails',
      'Branded emails',
      'Marketing Emails',
    ],
    faviconUrl: 'static/semplates_blue.svg',
    siteUrl: 'https://semplates.io/',
    image: 'static/hero_image.svg',
  },
  plugins: [
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Semplates`,
        short_name: `Semplates`,
        start_url: `/`,
        icon: 'static/semplates_blue.svg',
        background_color: `#ffffff`,
        theme_color: '#5bc0be',
        display: `standalone`,
        cache_busting_mode: `none`,
      },
    },
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Montserrat`],
        display: 'swap',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
          cookieName: 'semplates-analytics-consent',
          anonymize: true, // default
          allowAdFeatures: true,
        },
        googleTagManager: {
          trackingId: process.env.GATSBY_GOOGLE_TAG_MANAGER_ID,
          cookieName: 'semplates-analytics-consent', // default
          dataLayerName: 'dataLayer', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },
  ],
};
