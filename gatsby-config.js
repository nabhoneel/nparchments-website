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
    `gatsby-transformer-sharp`,
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "nabhoneelparchments.wordpress.com",
        protocol: "https",
        hostingWPCOM: true,
        useACF: false,
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        // perPage: 100,        
        // Set how many simultaneous requests are sent at once.
        // concurrentRequests: 10,        
        // // Blacklisted routes using glob patterns
        excludedRoutes: ["**/*/*/about"],
        auth: {
          wpcom_app_clientSecret: "NmcaZDE0LSkh6lunt1M9nTpeFvJVPRUV8A38RuaxBhc53NmsUahsoxdK8jBkBSG1",
          wpcom_app_clientId: "58269",
          wpcom_user: "nabhoneel.95e@gmail.com",
          wpcom_pass: "fortified@RamB319",
          // jwt_user: "rebel",
          // jwt_pass: "gilaboo",
        },
      },
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