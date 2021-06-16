import React from 'react'

import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SearchComponent from '../components/SearchComponent'
class SearchPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout>
        <div className="content-section">
          <Helmet title={`${siteTitle} | Ooops!`} />
          <section className="section">
            <div className="container content">
              <h1 className="title">Search Loop</h1>
              {/* <p>
                Try typing a term in the search box to find something. For
                example: 'wood' or 'acoustic'.
              </p> */}
              <SearchComponent />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default SearchPage

export const pageQuery = graphql`
  query searchQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
