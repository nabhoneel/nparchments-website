var proxy = require("http-proxy-middleware");

module.exports = {
  siteMetadata: {
    title: `Nabhoneel's Parchments`,
    subtitle: `All thing photographed and written down`,
    description: `My portfolio and a few articles about my wherabouts - here and there`,
    author: `@nabhoneel`,
    siteUrl: 'https://www.nparchments.com'
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
        name: `photographs`,
        path: `${__dirname}/src/images/photographs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nabhoneel's Parchments`,
        short_name: `nparchments`,
        start_url: `/`,
        background_color: `#4568c6`,
        theme_color: `#4568c6`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-133677369-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "nabhoneelparchments.wordpress.com",
        protocol: "https",
        hostingWPCOM: true,
        useACF: false,
        verboseOutput: true,
        // // Blacklisted routes using glob patterns
        excludedRoutes: [
          "**/*/*/about",
          "**/*/*/photographs"
        ],
        auth: {
          wpcom_app_clientSecret: `${process.env.WP_CLIENT_SECRET}`,
          wpcom_app_clientId: `${process.env.WP_CLIENT_ID}`,
          wpcom_user: `${process.env.WP_USER}`,
          wpcom_pass: `${process.env.WP_PASS}`,
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // access_token: "1550641884.73e60e1.d63cb1f5651b485ba2aac3a3eecf2a54"
        username: `nabhoneel_`,
      }
    },
  ],
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9001/",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
}