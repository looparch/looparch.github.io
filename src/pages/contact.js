import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import GoogleMap from '../components/GoogleMap'
import FormContact from '../components/FormContact'
import Seo from '../components/Seo'

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMap: false,
    }
  }

  componentDidMount() {
    this.setState({ displayMap: true })
  }

  render() {
    const siteMetadata = this.props.data.site.siteMetadata
    const siteTitle = siteMetadata.title
    const manufacturers = this.props.data.allContentfulManufacturer || {
      edges: [],
    }
    const postNode = {
      title: 'Contact Us',
      description: {
        internal: {
          content: 'We would love to hear from you.',
        },
      },
    }

    return (
      <Layout>
        <div className="content-section">
          <Helmet title={`${siteTitle} | Contact Us`} />
          <Seo
            pagePath={`contact`}
            postNode={postNode}
            pageSEO
            siteMetadata={this.props.data.site.siteMetadata}
            location={this.props.location}
          />
          <GoogleMap
            API_KEY={this.props.data.site.siteMetadata.mapKey}
            PLACE_ID={this.props.data.site.siteMetadata.placeId}
            render={this.state.displayMap}
          />
          <section className="section">
            <div className="container">
              <h1 className="title is-size-4"> Contact Us </h1>
              <div className="columns">
                <div className="column is-two-thirds">
                  <FormContact
                    section="Contact Us"
                    manufacturers={manufacturers}
                    recaptchaKey={siteMetadata.recaptchaKey}
                  />
                </div>
                <div className="column">
                  <div className="content">
                    <p>
                      We’d love to hear from you. If you’re interested in
                      receiving samples, scheduling a presentation or talking to
                      us about any of our product lines, feel free to fill out
                      the form.
                    </p>
                    <p>Our showroom address is:</p>
                    <p>
                      <strong> Loop Architectural Materials </strong> <br />
                      3110 N 16 th Street <br />
                      Phoenix, AZ 85016
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulManufacturer(sort: { fields: [title] }) {
      edges {
        node {
          id
          title
        }
      }
    }
    site {
      siteMetadata {
        description
        mapKey
        placeId
        publisher
        recaptchaKey
        shareImage
        shareImageHeight
        shareImageWidth
        siteUrl
        title
        userTwitter
      }
    }
  }
`
