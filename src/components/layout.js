import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

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
