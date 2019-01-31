import React, { Component } from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'

import './photographs.scss'
import InstaIcon from '../images/instagram-icon.png'

class Photographs extends Component {
  render() {
    const data = this.props.data
		console.log(data);
    return (
      <Layout>
        <SEO title="Photographs" />
				<div className="top-title">
					<div className="heading">Instagram feed</div>
					<div className="follow-me"><img src={InstaIcon} alt="instagram-icon"/></div>
				</div>
        <div className="Photographs">
          <div className="photo-grid">
						{ data.allInstaNode.edges.map( ({ node }) => (
							<div className="photo-grid-element" key={node.id}>
								<img src={node.localFile.childImageSharp.fluid.src} alt={node.caption} />
							</div>
						) ) }
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
