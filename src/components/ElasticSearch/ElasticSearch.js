import React, { Component } from 'react'
import { Index } from 'elasticlunr'
import { Link } from 'gatsby'
import queryString from 'querystring'

// Search component
export default class ElasticSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  componentDidMount() {
    if (document.location.search) {
      const el = document.getElementById('searchTerm')
      const searchTerm = queryString.parse(document.location.search)
      this.search({
        target: {
          value: searchTerm[`?s`],
        },
      })
    }
  }

  render() {
    return (
      <div>
        <div className="field">
          <div className="control has-icons-left">
            <input
              className="input is-large"
              type="text"
              value={this.state.query}
              onChange={this.search}
              id="searchTerm"
              autoFocus
            />
            <span className="icon is-medium is-left">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="svg-inline--fa fa-search fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{
                  position: 'absolute',
                  maxWidth: '1.5rem',
                  maxHeight: '1.5rem',
                }}
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <section className="content">
          {this.state.results.map((page) => (
            <div key={page.id}>
              <Link to={page.path}>{page.title}</Link>:&nbsp;
              <div
                className="tags is-inline-block"
                style={{ margin: `0.25rem 0 0.25rem 0` }}
              >
                {page.tags.map((tag, i) => {
                  return (
                    <div className="tag" key={i}>
                      {tag}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </section>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = (evt) => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
