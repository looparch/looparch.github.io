import React from 'react'
import Layout from '../../components/layout'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import ManufacturerPreview from '../../components/manufacturer-preview'
import SEO from '../../components/seo'

import styles from './index.sass'

class ProductsIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allContentfulManufacturer.edges
    const postNode = {
      title: 'Our Manufacturers',
      description: {
        internal: {
          content:
            'A current listing of the manufacturers Loop Architectural Materials represents.',
        },
      },
    }

    return (
      <Layout>
        <div className="content-section">
          <Helmet title={`${siteTitle} | Our Manufacturers`} />
          <SEO
            pagePath={`manufacturers`}
            postNode={postNode}
            pageSEO
            siteMetadata={this.props.data.site.siteMetadata}
          />
          <section className="section">
            <div className="container">
              <h1 className="title is-size-4">Our Manufacturers</h1>
              <div className="manufacturer-list columns is-multiline">
                {posts.map(({ node }) => {
                  return <ManufacturerPreview key={node.slug} article={node} />
                })}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ProductsIndex

export const pageQuery = graphql`
  query ProductIndexQuery {
    allContentfulManufacturer(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fixed(width: 300) {
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
            }
            fluid(maxWidth: 300) {
              aspectRatio
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
            resize(height: 300, resizingBehavior: FILL) {
              src
              width
              height
              aspectRatio
            }
          }
          logoImageDark {
            description
            fluid(maxWidth: 1200) {
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
            fixed(width: 1200) {
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
            }
            resize(width: 501, height: 167, resizingBehavior: PAD) {
              src
              width
              height
              aspectRatio
            }
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
        title
        siteUrl
        description
        shareImage
        shareImageWidth
        shareImageHeight
        publisher
      }
    }
  }
`
