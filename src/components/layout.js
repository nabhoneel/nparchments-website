import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import './layout.scss'

const renderDependencies = () => {
  const hostname = window && window.location && window.location.hostname
  if (hostname.indexOf('localhost') != -1) {
    // development env -> import bootstrap CSS [JS files aren't getting loaded in order]
    import('bootstrap/dist/css/bootstrap.min.css')
    import('jquery/dist/jquery')
    return (
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />

        <script
          type="text/javascript"
          src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        />
      </Helmet>
    )
  } // production env
  else
    return (
      <Helmet>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
        />

        <script
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossorigin="anonymous"
        />

        <link
          rel="stylesheet"
          type="text/css"
          href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
        />

        <script
          type="text/javascript"
          src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
        />
      </Helmet>
    )
}

const Layout = ({ children, footerBackground, footerForeground }) => {
  const back = footerBackground || "rgb(214, 214, 214)";
  const fore = footerForeground || "#000";
  
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          {renderDependencies()}

          <Header />

          <div style={{}}>
            {children}
            <footer
              style={{
                textAlign: 'center',
                padding: '1em',
                background: back,
                color: fore,
                width: '100%',
              }}
            >
              Rebel © {new Date().getFullYear()}
            </footer>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
