import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ArticlePreview from '../components/ArticlePreview'
import Seo from '../components/Seo'

class ArticleIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const posts = this.props.data.allContentfulBlogPost.edges
    const postNode = {
      title: 'Articles',
      description: {
        internal: {
          content:
            'A list of articles and press releases from Loop Architectural Materials listed in the order they were created.',
        },
      },
    }

    return (
      <Layout>
        <div className="content-section">
          <Helmet title={`${siteTitle} | Articles`} />
          <Seo
            pageSEO
            pagePath={`articles`}
            postNode={postNode}
            siteMetadata={this.props.data.site.siteMetadata}
            location={this.props.location}
          />
          <section className="section">
            <div className="container">
              <h1 className="title is-size-4">Articles</h1>
              <div className="article-list columns is-multiline">
                {posts.map(({ node }) => {
                  return (
                    <div key={node.slug} className="column is-one-third">
                      <ArticlePreview
                        article={node}
                        siteMetadata={this.props.data.site.siteMetadata}
                      />
                    </div>
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

export default ArticleIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate
          readableDate: publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            title
            description
            gatsbyImageData(width: 400, height: 300)
            file {
              url
            }
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          description {
            childMarkdownRemark {
              excerpt
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
      }
    }
  }
`
