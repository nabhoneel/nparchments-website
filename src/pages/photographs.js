import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/layout'
import SEO from '../components/seo'
import './photographs.scss'
import InstaIcon from '../images/instagram-icon.png'
import SliderArrow from '../components/SliderArrow'

class Photographs extends Component {
  componentDidMount() {
    const data = this.props.data

    data.allFile.edges.forEach(({ node }) => {
      const url = "url('" + node.childImageSharp.fluid.src + "')"

      document.getElementById(
        `${node.id}`
      ).firstChild.firstChild.style.backgroundImage = url

      document.getElementById(`${node.id}`).firstChild.firstChild.style.filter =
        'blur(20px) brightness(50%)'
    })
  }

  render() {
    const data = this.props.data

    const settings = {
      accessibility: false,
      arrows: true,
      adaptiveHeight: true,
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SliderArrow to="prev" icon="far fa-arrow-alt-circle-left" />,
      nextArrow: <SliderArrow to="next" icon="far fa-arrow-alt-circle-right" />,
    }

    return (
      <Layout footerBackground="#111" footerForeground="#fff">
        <SEO title="Photographs" />

        <div className="Photographs">
          <Slider {...settings}>
            {data.allFile.edges.map(({ node }) => {
              return (
                <div key={node.id} id={node.id}>
                  <Img
                    fluid={node.childImageSharp.fluid}
                    style={{ background: `black` }}
                  />
                </div>
              )
            })}
          </Slider>

          {/* Slider portion ends here; Instagram feed begins below: */}

          <div className="top-title">
            <OutboundLink
              className="btn"
              href="https://www.instagram.com/nabhoneel_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Instagram feed <img src={InstaIcon} alt="instagram-icon" />
            </OutboundLink>
          </div>

          <div className="photo-grid">
            {data.allInstaNode.edges.map(({ node }) => (
              <div className="photo-grid-element" key={node.id}>
                {/* <a href="#" target="_blank" /> */}

                {/* <div className="content-overlay" /> */}

                <OutboundLink
                  href={'https://www.instagram.com/p/' + node.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Img fluid={node.localFile.childImageSharp.fluid} />
                </OutboundLink>
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
