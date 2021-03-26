const path = require('path')
const voca = require('voca')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const manufacturerPost = path.resolve(
      './src/templates/manufacturer-post.js'
    )
    const productTemplate = path.resolve('./src/templates/product-template.js')
    const categoryTemplate = path.resolve(
      './src/templates/category-template.js'
    )

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: { frontmatter: { slug: { ne: null } } }
              sort: {
                fields: [frontmatter___manufacturer, frontmatter___title]
              }
            ) {
              edges {
                node {
                  frontmatter {
                    slug
                    manufacturer
                  }
                }
              }
            }
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
                  tags
                }
              }
            }
            categories: allMarkdownRemark {
              distinct(field: frontmatter___category)
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        const manufacturers = result.data.allContentfulManufacturer.edges
        const products = result.data.allMarkdownRemark.edges
        const categories = result.data.categories.distinct

        posts.forEach((post, index) => {
          createPage({
            path: `/articles/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
        manufacturers.forEach((post, index) => {
          createPage({
            path: `/manufacturers/${post.node.slug}/`,
            component: manufacturerPost,
            context: {
              slug: post.node.slug,
              title: post.node.title,
            },
          })
        })
        products.forEach((product, index) => {
          createPage({
            path: product.node.frontmatter.slug,
            component: productTemplate,
            context: {
              // additional data can be passed via context
              slug: product.node.frontmatter.slug,
              manufacturer: product.node.frontmatter.manufacturer,
            },
          })
        })
        categories.forEach((category, index) => {
          createPage({
            path: `categories/${voca.kebabCase(category)}`,
            component: categoryTemplate,
            context: {
              category,
            },
          })
        })
      })
    )
  })
}
