import React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import kebabCase from 'voca/kebab_case'

import CategoryPreview from '../../components/category-preview'
import SEO from '../../components/seo'

class CategoriesIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allContentfulManufacturer.edges
    const categories = this.props.data.categories.group

    const postNode = {
      title: 'Categories',
      description: {
        internal: {
          content: 'Loop Architectural Materials product listing by category.',
        },
      },
    }

    return (
      <Layout>
        <div className="content-section">
          <Helmet title={`${siteTitle} | Product Categories`} />
          <SEO
            pagePath={`categories`}
            postNode={postNode}
            pageSEO
            siteMetadata={this.props.data.site.siteMetadata}
            location={this.props.location}
          />
          <section className="section" id="categories">
            <div className="container">
              <h1 className="title is-size-4">Product Categories</h1>
              <div className="columns is-multiline is-variable is-4">
                {categories.map((group, index) => {
                  const category = group.edges[0].node.frontmatter
                  return (
                    <article
                      className={`column is-inline-block is-one-quarter-desktop is-one-third-tablet is-half-mobile`}
                      id={group.fieldValue}
                      key={group.fieldValue}
                    >
                      <Link
                        to={`/categories/${kebabCase(group.fieldValue)}`}
                        hrefLang="en"
                        rel="help"
                      >
                        <GatsbyImage
                          image={
                            category.image_primary.childImageSharp
                              .gatsbyImageData
                          }
                          alt={group.fieldValue}
                          className={`image product-preview-image fluid`}
                        />
                        <h3 className="is-size-6">{`${group.fieldValue}`}</h3>
                      </Link>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default CategoriesIndex

export const pageQuery = graphql`
  query CategoryIndexQuery {
    allContentfulManufacturer(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          logoImageDark {
            description
            gatsbyImageData(height: 150, quality: 100)
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
        publisher
        shareImage
        shareImageHeight
        shareImageWidth
        siteUrl
        title
        userTwitter
      }
    }
    categories: allMarkdownRemark {
      group(field: frontmatter___category, limit: 1) {
        fieldValue
        edges {
          node {
            id
            frontmatter {
              title
              image_primary {
                childImageSharp {
                  gatsbyImageData(
                    width: 300
                    height: 300
                    placeholder: BLURRED
                    transformOptions: { fit: COVER, cropFocus: ATTENTION }
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
