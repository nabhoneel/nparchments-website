import React from 'react';
// import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import logo from '../images/logo.svg';
import favicon from '../images/logo.png';
import './index.scss';
// import { graphql } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`nparchments.com`, `Nabhoneel`, `Majumdar`, `Developer`, `Photographer`]} image={favicon} />
    <div className="Home">

        <header id="showcase">
          <div className="logo">
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="typewriter">
            <h1>Welcome to my coordinates!</h1>
          </div>
        </header>

        <section className="about-me">
          <div className="divider"></div>
          <div className="about-me-text">
            <p>
              Hello! Nabhoneel here.<br />
            </p>
            <p>
              I am a full stack developer currently pursuing a master's degree in Computer Science,<br />
              with a keen interest in web development and gradually delving into machine learning.
            </p>            
            <p style={{ paddingTop: '1em' }}>
              When I'm not cooped up in my room, nerd-ing away, I hop around from place to place with my Canon + Tokina camera kit and my tripod.
            </p>            
          </div>          
        </section>

      </div>
  </Layout>
)

export default IndexPage

// export const query = graphql`
// {
//   allFile(filter: {name: {eq: "landing-page-backdrop"} }) {
//     edges {
//       node {
//         id
//         relativePath
//       }
//     }
//   }
// }
// `