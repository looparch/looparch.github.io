import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

class ArticlePreview extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const article = this.props.article
    const siteMetadata = this.props.siteMetadata

    return (
      <article className="article-preview box">
        <Link
          to={`/articles/${article.slug}`}
          hrefLang="en"
          style={{ color: '#363636' }}
        >
          <GatsbyImage
            image={article.heroImage.gatsbyImageData}
            alt={article.heroImage.title}
            title={article.heroImage.title}
          />
          <hr />
          <h3 className="title is-size-5">{article.title}</h3>
          <p className="is-size-7">
            {article.body.childMarkdownRemark.excerpt}
          </p>
        </Link>
      </article>
    )
  }
}

export default ArticlePreview
