import React from 'react'

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
        that same old warning<br /><i class="em em-tired_face"></i>        
      </div>
      <div className="go-back">
        Try a different, <i>known</i> page:<br />
        <div className="button-section">
          <button className="btn btn-outline-primary">Home</button>
          <button className="btn btn-outline-primary">Contact me</button>
          <button className="btn btn-outline-primary">Blog</button>
          <button className="btn btn-outline-primary">About me</button>
          <button className="btn btn-outline-primary">Photographs</button>
        </div>        
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
