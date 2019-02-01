import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Img from 'gatsby-image'
import {  graphql } from 'gatsby'
import Layout from '../components/layout'

import './post.scss'

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    let date = new Date(post.date)

    return (
      <Layout>
        <div className="BlogPost">
          <div className="container">
            <div className="blog-post-hero-section">
              <img src={post.jetpack_featured_media_url} alt={[post.title]} />
            </div>

            <div className="blog-header">
              <div className="blog-post-title">
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              </div>
              <div className="blog-post-meta">
                Published by
                <div className="author">Nabhoneel Majumdar</div>
                <div className="date">on {date.toLocaleDateString()}</div>
              </div>
              {/* end of meta section */}
            </div>

            <div className="blog-post-container">
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date
      slug
      excerpt
      jetpack_featured_media_url
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`
