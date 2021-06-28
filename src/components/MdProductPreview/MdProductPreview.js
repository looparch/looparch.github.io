import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

// import styles from './product-preview.sass'

class MdProductPreview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const product = this.props.product
    const post = this.props.post
    const description = product.description || product.title

    const VariableImage = (
      <GatsbyImage
        image={product.image_primary.childImageSharp.gatsbyImageData}
        alt={description}
        title={`${post.title} ${product.title}`}
        className={`image product-preview-image fluid`}
      />
    )

    return (
      <article className={`product-preview card`} id={product.title}>
        <Link to={product.slug} hrefLang="en" rel="help">
          <div className="card-image">{VariableImage}</div>
          <div className="card-content">
            <div className="media-content" style={{ position: 'absolute' }}>
              <h3 className="is-size-6">{product.title}</h3>
            </div>
          </div>
        </Link>
      </article>
    )
  }
}
export default MdProductPreview
