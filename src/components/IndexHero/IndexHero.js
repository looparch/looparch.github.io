import React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
// import CarouselCss from './carousel-css'

const IndexHero = ({ posts }) => {
  const article = posts[0].node

  console.log(article)

  return (
    <section className="hero is-medium is-light is-bold">
      {/* <CarouselCss posts={posts} /> */}
      <div className="carousel-preview">
        <GatsbyImage
          image={article.heroImage.localFile.childImageSharp.gatsbyImageData}
          alt={article.title}
          className="carousel-preview-image"
        />
        <div
          id="preview-content"
          className="carousel-preview-content has-text-centered content"
        >
          <h3 className="title is-size-1">
            <Link to={`/articles/${article.slug}`}>{article.title}</Link>
          </h3>
          <div
            className="subtitle"
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
          <Link
            to={`/articles/${article.slug}`}
            className="button is-primary"
            hrefLang="en"
          >
            Read More
          </Link>
        </div>
        <div className="carousel-preview-dark-overlay" />
      </div>
    </section>
  )
}

export default IndexHero
