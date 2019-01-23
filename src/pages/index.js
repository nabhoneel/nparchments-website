import React from 'react';
// import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

import logo from '../images/logo.svg';
import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Home">

        <header id="showcase">
          <div className="logo">
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="typewriter">
            <h1>Hello! Welcome to my coordinates.</h1>
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
          </div>          
        </section>

      </div>
  </Layout>
)

export default IndexPage
