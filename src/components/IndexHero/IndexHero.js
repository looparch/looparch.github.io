import React from 'react'
import { Link } from 'gatsby'

const IndexHero = ({ posts }) => {
  const article = posts[0].node

  return (
    <div
      className="hero is-large is-relative"
      style={{
        backgroundImage: `url(${article.heroImage.gatsbyImageData.images.fallback.src})`,
      }}
    >
      <section className="hero-body">
        <div className="is-overlay" style={{ background: 'rgba(0,0,0,.25)' }} />
        <div className="container has-text-centered">
          <h1 className="title is-size-1">
            <Link
              to={`/articles/${article.slug}`}
              className="has-text-white has-text-weight-bold has-text-white"
            >
              {article.title}
            </Link>
          </h1>
          <p
            className="subtitle is-size-3 has-text-white has-text-weight-light"
          >
            {article.description.childMarkdownRemark.rawMarkdownBody}
          </p>
          <Link
            to={`/articles/${article.slug}`}
            className="button is-primary"
            hrefLang="en"
          >
            Read More
          </Link>
        </div>
      </section>
    </div>
  )
}

export default IndexHero
