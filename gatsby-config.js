let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (_) {
  contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig

  if (!spaceId || !accessToken) {
    throw new Error(
      'Contentful spaceId and the delivery token need to be provided.'
    )
  }
}

module.exports = {
  siteMetadata: {
    title: 'Loop Architectural Materials',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-glamor',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
    resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
