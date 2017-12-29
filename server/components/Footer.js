/* @flow */
import React from 'react';

type FooterProps = {
  copyright: string,
  footerLinks: any
};

const Footer = ({copyright, logo, footerLinks, socialMediaLinks}:FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="copyright">
          <img className="copyright-logo" src={logo.url} alt={logo.title} />
          <span className="copyright-text" dangerouslySetInnerHTML={{__html: copyright}} />
        </div>
        <nav className="footer-links">
          {footerLinks.map(link => {
            return (<a href={link.href}>{link.text}</a>)
          })}
        </nav>
        <nav className="social-media-links">
          {socialMediaLinks.map(link => {
            return (<a href={link.link}>{link.title}</a>)
          })}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
