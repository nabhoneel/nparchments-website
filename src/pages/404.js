import React from 'react'
import Link from "gatsby-link"

import Layout from '../components/layout'
import SEO from '../components/seo'

import './404.scss';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
    <div className="PageNotFound">
      <div className="main-text">
        404
      </div>
      <div className="sub-text">
        that same old warning<br /><i className="em em-tired_face"></i>        
      </div>
      <div className="go-back">
        Try a different, <i>known</i> page:<br />
        <div className="button-section">
          <Link to={ '/' } className="btn btn-outline-primary">Home</Link>   
          <Link to={ '/' + 'blog' } className="btn btn-outline-primary">Blog</Link>
          <Link to={ '/' + 'photographs' } className="btn btn-outline-primary">Photographs</Link>
          <Link to={ '/' + 'projects' } className="btn btn-outline-primary">Portfolio</Link>
          <Link to={ '/' + 'contact' } className="btn btn-outline-primary">Contact Me</Link>
        </div>        
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
