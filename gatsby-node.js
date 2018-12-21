const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const manufacturerPost = path.resolve('./src/templates/manufacturer-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulManufacturer {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        const manufacturers = result.data.allContentfulManufacturer.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/articles/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
        manufacturers.forEach((post, index) => {
          createPage({
            path: `/manufacturers/${post.node.slug}/`,
            component: manufacturerPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
