import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import kebabCase from 'voca/kebab_case'

class CategoryPreview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const category = this.props.category
    return (
      <div className="column is-inline-block is-one-quarter-desktop is-one-third-tablet is-half-mobile is-relative">
        <Link to={`/categories/${kebabCase(category.fieldValue)}`}>
          <div
            className="is-overlay"
            style={{
              height: '100%',
              zIndex: 30,
              textAlign: 'center',
            }}
          >
            <h3
              className=""
              style={{
                background: 'rgba(255,255,255,0.8)',
                position: 'absolute',
                bottom: '1rem',
                width: '100%',
                // left: '50%',
                // transform: 'translate(-50%, -50%)',
                padding: '1rem',
              }}
            >
              {category.fieldValue}
            </h3>
          </div>
          <GatsbyImage
            image={
              category.edges[0].node.frontmatter.image_primary.childImageSharp
                .gatsbyImageData
            }
            alt={category.edges[0].node.frontmatter.title}
            objectFit="scale-down"
            objectPosition="25% 25%"
          />
        </Link>
      </div>
    )
  }
}

CategoryPreview.propTypes = {
  category: PropTypes.object.isRequired,
}

CategoryPreview.defaultProps = {
  category: {},
}

export default CategoryPreview
