const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const pageQuery = `
{
  allWordpressPage {
    edges {
      node {
        id
        slug
        status
        template
      }
    }
  }
}
`

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id
        slug
        status
        template
        format
      }
    }
  }
} 
`

// Implement the Gatsby API “createPages”:

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  return new Promise((resolve, reject) => {

    graphql(pageQuery)
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pageTemplate = path.resolve("./src/templates/page.js");

        _.each(result.data.allWordpressPage.edges, edge => {
          createPage({
            path: `/${edge.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })

      // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
      .then(() => {
        graphql(postsQuery).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const postTemplate = path.resolve("./src/templates/post.js");
          const blogTemplate = path.resolve("./src/pages/blog.js");

          // Create Posts
          createPage({
            path: `/blog`,
            component: slash(blogTemplate)
          });

          _.each(result.data.allWordpressPost.edges, edge => {
            createPage({
              path: `/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: {
                id: edge.node.id,
              },
            })
          })
          resolve()
        })
      })
    // ==== END POSTS ====
  })
}