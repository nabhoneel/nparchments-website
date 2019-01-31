import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './photographs.scss'
import InstaIcon from '../images/instagram-icon.png'

class Photographs extends Component {
  render() {
    console.log(this.props.data)
    const data = this.props.data

    const settings = {
      accessibility: false,
      arrows: true,
      adaptiveHeight: false,
      dots: false,
      infinite: true,
      // autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <Layout footerBackground="#111" footerForeground="#fff">
        <SEO title="Photographs" />

        <Helmet>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
            integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
            crossorigin="anonymous"
          />
        </Helmet>

        <div className="Photographs">
          <Slider {...settings}>
            {data.allFile.edges.map(({ node }) => (
              <div key={node.id}>
                <Img fluid={node.childImageSharp.fluid} />
              </div>
            ))}
          </Slider>

          <div className="top-title">
            <a
              className="btn"
              href="https://www.instagram.com/nabhoneel_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Instagram feed <img src={InstaIcon} alt="instagram-icon" />
            </a>
          </div>

          <div className="photo-grid">
            {data.allInstaNode.edges.map(({ node }) => (
              <div className="photo-grid-element" key={node.id}>
                {/* <a href="#" target="_blank" /> */}

                {/* <div className="content-overlay" /> */}

                <a
                  href={'https://www.instagram.com/p/' + node.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={node.localFile.childImageSharp.fluid} />
                </a>
                {/* 
                <div className="content-details fadeIn-bottom">
                  <h3 className="content-title">This is a title</h3>
                  <p className="content-text">This is a short description</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default Photographs

export const photos = graphql`
  query photos {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          original
          timestamp
          caption
          localFile {
            id
            size
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dimensions {
            height
            width
          }
        }
      }
    }

    allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "photographs" }
      }
    ) {
      edges {
        node {
          id
          name
          relativePath
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
