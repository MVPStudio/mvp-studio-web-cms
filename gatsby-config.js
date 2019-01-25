module.exports = {
  siteMetadata: {
    title: `MVP Studio`,
    description: `We are a collaborative and fun group of web professionals who strive to provide cost–effective design solutions that support your organization's mission and suits your exact needs.`,
    author: `Greg McKelvey`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/, //uses regex to determine path of svgs
        },
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
          //urls: [`${__dirname}/src/fonts/webfontkit/stylesheet.css`],
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
        icon: `src/images/single-gear.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
