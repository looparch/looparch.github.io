import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import truncate from 'voca/truncate'

import Layout from '../components/layout'

// import styles from '../components/product-preview.sass'

class CategoryTemplate extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    const site = this.props.data.site
    return (
      <Layout>
        <Helmet
          title={`${this.props.pageContext.category} | ${site.siteMetadata.title}`}
        />
        <div className="content-section">
          <section className="section" id="category-template">
            <div className="container">
              <h1 className="title is-size-4">
                <Link to="/categories">Categories</Link>
                {' / '}
                {this.props.pageContext.category}
              </h1>
              <div className="columns is-multiline is-variable is-4">
                {this.props.data.allMarkdownRemark.edges.map(
                  (product, index) => {
                    const item = product.node.frontmatter
                    return (
                      <article
                        className={`column is-inline-block is-one-quarter-desktop is-one-third-tablet is-half-mobile`}
                        id={item.title}
                        key={index}
                      >
                        <Link to={item.slug} hrefLang="en" rel="help">
                          <GatsbyImage
                            image={
                              item.image_primary.childImageSharp.gatsbyImageData
                            }
                            alt={item.description}
                            title={`${item.manufacturer} ${item.title}`}
                            className={`image product-preview-image fluid`}
                          />
                          <h3 className="is-size-6">{`${item.manufacturer} - ${item.title}`}</h3>
                        </Link>
                      </article>
                    )
                  }
                )}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CategoryQuery($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          frontmatter {
            manufacturer
            description
            designer
            slug
            tags
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
    site {
      siteMetadata {
        publisher
        shareImage
        siteUrl
        title
        userTwitter
      }
    }
  }
`
