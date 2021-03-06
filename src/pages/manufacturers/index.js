import React from 'react'

import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import ManufacturerPreview from '../../components/ManufacturerPreview'
import Seo from '../../components/Seo'

import styles from './index.sass'

class ManufacturersIndex extends React.Component {
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
          <Seo
            pagePath={`manufacturers`}
            postNode={postNode}
            pageSEO
            siteMetadata={this.props.data.site.siteMetadata}
            location={this.props.location}
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

export default ManufacturersIndex

export const pageQuery = graphql`
  query ManufacturerIndexQuery {
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
  }
`
