import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import generateMarkdownProductJSONLD from '../components/SEOProduct/generateMarkdownProductJSONLD'
import Seo from '../components/Seo'

class ProductTemplate extends React.Component {
  constructor(props) {
    super(props)
    const { markdownRemark, contentfulManufacturer, site } = props.data
    const { frontmatter } = markdownRemark
    const manufacturer = contentfulManufacturer
    this.tagList = frontmatter.tags.map((tag, id) => (
      <li className="tag" key={id}>
        {tag}
      </li>
    ))
    this.jsonLD = generateMarkdownProductJSONLD(
      markdownRemark,
      contentfulManufacturer,
      site.siteMetadata
    )
  }

  render() {
    const frontmatter = this.props.data.markdownRemark.frontmatter
    const site = this.props.data.site
    const manufacturer = this.props.data.contentfulManufacturer
    const tagList = this.tagList
    const jsonLd = this.jsonLD

    return (
      <Layout>
        <Helmet
          title={`${frontmatter.manufacturer} ${frontmatter.title} | ${site.siteMetadata.title}`}
        />
        <Seo
          productSEO
          pagePath={`manufacturers/${manufacturer.slug}`}
          siteMetadata={site.siteMetadata}
          postNode={manufacturer}
          location={this.props.location}
          product={frontmatter}
        />
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
        <div className="article content-section">
          <div className="section">
            <div className="container">
              <div className="content">
                <h1
                  className="title is-size-2 is-size-4-mobile"
                  style={{ marginBottom: 0 }}
                >
                  {frontmatter.manufacturer} - {frontmatter.title}
                </h1>
                <h2
                  className="has-text-weight-light is-size-4 is-size-5-mobile"
                  style={{ marginTop: 0 }}
                >
                  {frontmatter.subtitle}
                  {frontmatter.designer !== 'null' && (
                    <span> by {frontmatter.designer}</span>
                  )}
                </h2>

                <GatsbyImage
                  image={
                    frontmatter.image_primary.childImageSharp.gatsbyImageData
                  }
                  alt={`${frontmatter.title} Image 1`}
                />

                {frontmatter.image_secondary && (
                  <GatsbyImage
                    image={
                      frontmatter.image_secondary.childImageSharp
                        .gatsbyImageData
                    }
                    alt={`${frontmatter.title} Image 2`}
                  />
                )}

                {frontmatter.description !== null && (
                  <p>{unescape(unescape(frontmatter.description))}</p>
                )}
              </div>
              <p className="control" style={{ marginBottom: '1rem' }}>
                <a
                  href={frontmatter.href}
                  target="_blank"
                  className="button is-primary"
                  rel="noopener"
                >
                  <span>View on {frontmatter.manufacturer}</span>
                </a>
              </p>
              <ul className="tags">{tagList}</ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ProductTemplate

export const pageQuery = graphql`
  query($slug: String!, $manufacturer: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        slug
        title
        image_primary {
          childImageSharp {
            gatsbyImageData
          }
        }
        image_secondary {
          childImageSharp {
            gatsbyImageData
          }
        }
        description
        tags
        designer
        manufacturer
        subtitle
        href
      }
    }
    contentfulManufacturer(title: { eq: $manufacturer }) {
      title
      logoImageDark {
        gatsbyImageData
      }
      heroImage {
        gatsbyImageData
      }
      slug
      description {
        internal {
          content
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
