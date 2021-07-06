import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ManufacturerPreview = ({ article }) => (
  <div className="column is-one-third">
    <div className="box">
      <Link to={`/manufacturers/${article.slug}`} hrefLang="en">
        <div className="image-wrapper">
          <GatsbyImage
            image={article.logoImageDark.gatsbyImageData}
            alt={article.logoImageDark.description}
          />
          <div className="tags">
            {article.tags.map((tag) => {
              return (
                <div className="tag" key={tag}>
                  {tag}
                </div>
              )
            })}
          </div>
        </div>
      </Link>
    </div>
  </div>
)

ManufacturerPreview.propTypes = {
  article: PropTypes.object.isRequired,
}

ManufacturerPreview.defaultProps = {
  article: {},
}

export default ManufacturerPreview
