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
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-K0P3YM92N9"
          />
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K0P3YM92N9');
          `}</script>
          <html className="has-navbar-fixed-top" lang="en" />
          <meta
            name="p:domain_verify"
            content="166b8bf16af4de614dccd2ea61cb0dc6"
          />
        </Helmet>
        <Navigation manufacturers={data.allContentfulManufacturer.edges} />
        <div>{children}</div>
        <Footer
          manufacturers={data.allContentfulManufacturer.edges}
          articles={data.allContentfulBlogPost.edges}
        />
      </>
    )}
  />
)
