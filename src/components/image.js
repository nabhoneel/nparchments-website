import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = ({ image }) => {
  console.log(image);
  // graphql(
  //   `query imager($imagePath: String) {
  //     placeholderImage: file(relativePath: { eq: $imagePath }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1280) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }`,
  //   { "imagePath": image }
  // );
  
  // console.log(imageData);
  // return (<Img fluid={imageData.placeholderImage.childImageSharp.fluid.src} />);
  return <img src={image} />
}

export default Image;