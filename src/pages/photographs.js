import React, {
	Component
} from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout";
import SEO from '../components/seo';

import './photographs.scss';

class Photographs extends Component {
	render() {
		const data = this.props.data;

		return(
			<Layout>
				<SEO title="Photographs" />
				<div className="Photographs">
					<div className="photo-grid">
					{/* { data.allInstagramContent.edges.map(async ({ node }) => {						
						if(!node.localImage.childImageSharp.fluid.src) {
							console.log('loading...');
						} */}
						// console.log(imageSrc);
						return (
							<div className="photo-grid-element" key={Math.random()}>
								hello
							</div>
						);
					}) }
					</div>
				</div>
			</Layout>
		);
	}
}

// Photographs.propTypes = {
// 	data: PropTypes.object.isRequired,
// 	edges: PropTypes.array,
// }

export default Photographs;

// export const instaQuery = graphql`
// 	query {
// 		instagramNode {
// 			edges {
// 				node {
// 					likes
// 					timestamp
// 					caption
// 					localFile {
// 						childImageSharp {
// 							fixed(width: 150, height: 150) {
// 								...GatsbyImageSharpFixed
// 							}
// 						}
// 					}
// 					dimensions {
// 						height
// 						width
// 					}
// 				}
// 			}
// 		}
// 	}

// `