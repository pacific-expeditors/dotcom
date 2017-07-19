/* @flow */
import React from 'react';

type FooterProps = {
  title: string,
  logo: string,
  footerLinks?: [string],
  copyright: string
};

const Footer = ({logo, title, footerLinks = [], copyright}:FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-logo">
          <img src={logo} alt={title} className="footer-logo-img" />
        </div>
        {footerLinks.length ? <ul className="footer-links">
          {footerLinks.map(link => <li><a href={link} className="footer-social-link">{link}</a></li>)}
        </ul> : null}
      </div>
      <div className="footer-row">
        <span className="copyright">
          {copyright}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
