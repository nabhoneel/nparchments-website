import React from 'react'
import { OutboundLink } from 'gatsby-plugin-gtag'

import './socialMedia.scss'

const socialMedia = () => (
  <div className="social-media-icon-set">
    <OutboundLink
      href="https://www.instagram.com/nabhoneel_"
      className="icon-button google-plus"
			target="_blank"
			rel="noopener noreferrer"
    >
      <i className="icon-google-plus fab fa-instagram" />
      <span />
    </OutboundLink>
    <OutboundLink
      href="https://twitter.com/nabhoneel"
      className="icon-button twitter"
			target="_blank"
			rel="noopener noreferrer"
    >
      <i className="icon-twitter fab fa-twitter" />
      <span />
    </OutboundLink>
    <OutboundLink
      href="https://www.facebook.com/nabhoneelm"
      className="icon-button facebook"
			target="_blank"
			rel="noopener noreferrer"
    >
      <i className="icon-facebook fab fa-facebook-f" />
      <span />
    </OutboundLink>
    <OutboundLink
      href="mailto:email@nparchments.com"
      className="icon-button google-plus"
			target="_blank"
			rel="noopener noreferrer"
    >
      <i className="icon-google-plus far fa-envelope" />
      <span />
    </OutboundLink>
  </div>
)

export default socialMedia
