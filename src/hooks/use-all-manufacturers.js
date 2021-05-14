import { useStaticQuery, graphql } from 'gatsby'

export const useAllManufacturers = () => {
  const { allContentfulManufacturer } = useStaticQuery(
    graphql`
      query AllManufacturerQuery {
        allContentfulManufacturer(sort: { fields: title, order: ASC }) {
          edges {
            node {
              contentful_id
              logoImageDark {
                gatsbyImageData(width: 300)
                description
              }
              logoImageLight {
                gatsbyImageData(width: 300)
                description
              }
              title
              slug
              heroImage {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                description
              }
            }
          }
        }
      }
    `
  )
  return allContentfulManufacturer.edges
}
