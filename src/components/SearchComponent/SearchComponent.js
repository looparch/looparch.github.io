import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import ElasticSearch from '../ElasticSearch'

const SearchComponent = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => (
      <ElasticSearch searchIndex={data.siteSearchIndex.index} />
    )}
  />
)

export default SearchComponent
