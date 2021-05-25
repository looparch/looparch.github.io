require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Contentful
let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (_) {
  contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
  pathPrefix: '/looparch_contentful',
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    PRESERVE_WEBPACK_CACHE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  siteMetadata: {
    author: 'Loop Architectural Materials',
    description:
      'Design & technical partner to the Arizona A+D community, Loop Architectural Materials represents leading brands in contract furniture, glass, and architectural/interior design products.',
    mapKey: process.env.LOOPARCH_MAPS_KEY || '',
    placeId: process.env.LOOPARCH_PLACE_ID || '',
    publisher: 'Loop Architectural Materials',
    recaptchaKey: process.env.SITE_RECAPTCHA_KEY || '',
    shareImage: '/images/logo.png',
    shareImageHeight: 112,
    shareImageWidth: 112,
    siteUrl: process.env.SITE_URL || 'https://looparch.com',
    title: 'Loop Architectural Materials',
    userTwitter: '@looparch',
  },
  plugins: [
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          ContentfulManufacturer: {
            title: (node) => node.title,
            tags: (node) => node.tags,
            path: (node) => `/manufacturers/${node.slug}`,
          },
          ContentfulBlogPost: {
            title: (node) => node.title,
            tags: (node) => node.tags,
            path: (node) => `/articles/${node.slug}`,
          },
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            tags: (node) => node.frontmatter.tags,
            path: (node) => node.frontmatter.slug,
          },
        },
        // Optional filter to limit indexed nodes
        // filter: (node, getNode) => node.frontmatter.tags !== 'exempt',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 1344,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: './src/markdown-pages/',
      },
      __key: 'markdown-pages',
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Loop Architectural Materials',
        short_name: 'Loop',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0BA24A',
        display: 'standalone',
        icon: 'src/images/logo.png',
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: process.env.SITE_URL || 'https://looparch.com',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map((edge) => {
                return Object.assign(
                  {},
                  {
                    title: edge.node.title,
                    description: `<img src="https:${edge.node.heroImage.file.url}"><br /><br />${edge.node.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt}`,
                    date: edge.node.publishDate,
                    url: `${site.siteMetadata.siteUrl}/articles/${edge.node.slug}`,
                    guid: `${site.siteMetadata.siteUrl}/articles/${edge.node.slug}`,
                    custom_elements: [
                      {
                        'content.encoded':
                          edge.node.childContentfulBlogPostBodyTextNode
                            .childMarkdownRemark.html,
                      },
                    ],
                  }
                )
              })
            },
            query: `
              {
                allContentfulBlogPost(sort: {order: DESC, fields: publishDate}) {
                  edges {
                    node {
                      title
                      slug
                      publishDate
                      heroImage {
                        file {
                          url
                        }
                      }
                      childContentfulBlogPostBodyTextNode {
                        childMarkdownRemark {
                          excerpt
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Loop Architectural Materials',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
  ],
}
