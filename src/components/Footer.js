/* @flow */
import React from 'react'
import uuid from 'uuid/v4'

type FooterProps = {
  copyright: string,
  footerLinks: any
}

const Footer = ({copyright, logo, footerLinks, socialMediaLinks}:FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-container footer-bottom">
        <div className="copyright">
          <img className="copyright-logo" src={logo.url} alt={logo.title} />
          <span className="copyright-text" dangerouslySetInnerHTML={{__html: copyright}} />
        </div>
        <nav className="footer-links">
          {footerLinks.map((link) => {
            return (<a key={uuid()} href={link.href}>{link.text}</a>)
          })}
        </nav>
        <nav className="social-media-links">
          {socialMediaLinks.map((link) => {
            return (
              <a key={uuid()} href={link.link}>
                <img src={link.icon.url} alt={link.title} />
              </a>
            )
          })}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
