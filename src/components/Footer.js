/* @flow */
import React from 'react'

type FooterProps = {
  copyright: string,
  footerLinks: any
}

const Footer = ({copyright, logo, footerLinks, socialMediaLinks, associationLogos}:FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-container footer-associations">
        {associationLogos.map((logo) => {
          return (
            <img className="footer-association-logo" src={`${logo.url}?h=100`} alt={logo.title} />
          )
        })}
      </div>
      <div className="footer-container footer-bottom">
        <div className="copyright">
          <img className="copyright-logo" src={logo.url} alt={logo.title} />
          <span className="copyright-text" dangerouslySetInnerHTML={{__html: copyright}} />
        </div>
        <nav key="footerLinks" className="footer-links">
          {footerLinks.map((link) => {
            return (<a key={link.href} href={link.href}>{link.text}</a>)
          })}
        </nav>
        <nav key="socialMediaLinks" className="social-media-links">
          {socialMediaLinks.map((link) => {
            return (
              <a key={link.href} href={link.link}>
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
