require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `MVP Studio`,
    description: `We are a collaborative and fun group of web professionals who strive to provide cost–effective design solutions that support your organization's mission and suits your exact needs.`,
    author: `Greg McKelvey`,
    siteUrl: 'https://mvpstudio.github.io/mvp-studio-web-cms/',
  },
  pathPrefix: '/mvp-studio-web-cms',

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
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        // apiKey: process.env.GATSBY_AIRTABLE_API_KEY, // this plugin looks for GATSBY_AIRTABLE_API_KEY automatically if environment variables are required above.
        tables: [
          {
            baseId: `appqzdNgU137oV8B3`, // found in api docs, check the 'show api' button, and is the number '...base('YOUR_BASE ID')
            tableName: `Showcase`,
            // tableView: `YOUR_TABLE_VIEW_NAME`,  // optional
            // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            mapping: { ScreenShot: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
            // tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`] // optional, for deep linking to records across tables.
          },
          {
            baseId: `appqzdNgU137oV8B3`,
            tableName: `Team`,
            mapping: { Avatar: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
            // tableView: `YOUR_TABLE_VIEW_NAME` // optional
            // can leave off queryName, mapping or tableLinks if not needed
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/, // uses regex to determine path of svgs
        },
      },
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
        async: true,
        defer: true,
        // args: `?onload=onloadCallback&render=explicit`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            'brandon_grotesquebold',
            'brandon_grotesque_regularRg',
            'brandon_grotesqueRgIt',
            'lulo_cleanone',
            'lulo_cleanone_bold',
          ],
          // urls: [`${__dirname}/src/fonts/webfontkit/stylesheet.css`],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mvp-studios`,
        short_name: `mvp`,
        start_url: `/`,
        background_color: `#e85a36`,
        theme_color: `#e85a36`,
        display: `minimal-ui`,
        icon: `src/images/gearOrange.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-express', // Makes all of the routes for the express server
      options: {
        output: 'config/gatsby-express.json',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
