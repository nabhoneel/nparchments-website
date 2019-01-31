import React, { Component } from 'react'
import { graphql } from 'gatsby'
// import Link from 'gatsby-link'
// import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './photographs.scss'
import InstaIcon from '../images/instagram-icon.png'

class Photographs extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout footerBackground="#111" footerForeground="#fff">
        <SEO title="Photographs" />

        <div className="Photographs">
          <div className="top-title">
            <a
              className="btn"
              href="https://www.instagram.com/nabhoneel_"
              target="_blank"
            >
              Go to Instagram feed <img src={InstaIcon} alt="instagram-icon" />
            </a>
          </div>

          <div className="photo-grid">
            {data.allInstaNode.edges.map(({ node }) => (
              <div className="photo-grid-element" key={node.id}>
                {/* <a href="#" target="_blank" />

                <div className="content-overlay" /> */}

                <a
                  href={'https://www.instagram.com/p/' + node.id}
                  target="_blank"
                >
                  <img
                    src={node.localFile.childImageSharp.fluid.src}
                    alt={node.caption}
                  />
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

export const instaQuery = graphql`
  query instagram {
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
  }
`
