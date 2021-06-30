const path = require('path')
const voca = require('voca')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const BlogPost = path.resolve('./src/templates/BlogPost.js')
    const ManufacturerPost = path.resolve(
      './src/templates/ManufacturerPost.js'
    )
    const ProductTemplate = path.resolve('./src/templates/ProductTemplate.js')
    const CategoryTemplate = path.resolve(
      './src/templates/CategoryTemplate.js'
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
            component: BlogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
        manufacturers.forEach((post, index) => {
          createPage({
            path: `/manufacturers/${post.node.slug}/`,
            component: ManufacturerPost,
            context: {
              slug: post.node.slug,
              title: post.node.title,
            },
          })
        })
        products.forEach((product, index) => {
          createPage({
            path: product.node.frontmatter.slug,
            component: ProductTemplate,
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
            component: CategoryTemplate,
            context: {
              category,
            },
          })
        })
      })
    )
  })
}
