import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout";
import SEO from '../components/seo';

import './blog.scss';

class PostsTemplate extends Component {

  render() {
		const data = this.props.data;

    return(
			<Layout>
				<SEO title="Blog" />
				<div className="Blog">
					<div className="container">
						{ data.allWordpressPost.edges.map(({ node }) => (
								<div className="blog-posts-grid-element" key={ node.slug }>
									<div className="blog-post-grid-element-featured-image">
										<img src={ node.jetpack_featured_media_url } alt={ node.title } />
									</div>
									<div className="blog-post-grid-element-text">
										<h2 className="blog-post-grid-element-text-heading" dangerouslySetInnerHTML={{ __html: node.title}}>
										</h2>

										<div className="blog-post-grid-element-text-excerpt" dangerouslySetInnerHTML={{ __html: node.excerpt }}>
										</div>
										
										<Link to={ '/' + node.slug } className="read-more btn btn-outline-info btn-sm">
											Read more
										</Link>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</Layout>
    );
  }
}

PostsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default PostsTemplate

export const pageQuery = graphql`
  query postsQuery{
    allWordpressPost{
      edges{
  	    node{
          id
          title
          excerpt
          slug
					date(formatString: "MMMM DD, YYYY")
					jetpack_featured_media_url
        }
      }
    }
  }
`