import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from '../components/navigation'
import Footer from '../components/footer.js'

import base from './base.scss'

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        allContentfulManufacturer(sort: { fields: [title], order: ASC }) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
        allContentfulBlogPost(
          limit: 5
          sort: { fields: [publishDate], order: DESC }
        ) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
        site {
          siteMetadata {
            title
            siteUrl
            description
            userTwitter
          }
        }
        categories: allMarkdownRemark {
          distinct(field: frontmatter___category)
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "3e787d44c8c64595bf7ec72585e2fe0c"}'
          ></script>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-3GR7L59SYP"
          />
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3GR7L59SYP');
          `}</script>
          <html className="has-navbar-fixed-top" lang="en" />
          <meta
            name="p:domain_verify"
            content="166b8bf16af4de614dccd2ea61cb0dc6"
          />
        </Helmet>
        <Navigation
          manufacturers={data.allContentfulManufacturer.edges}
          categories={data.categories.distinct}
        />
        <div>{children}</div>
        <Footer
          manufacturers={data.allContentfulManufacturer.edges}
          articles={data.allContentfulBlogPost.edges}
        />
      </>
    )}
  />
)
