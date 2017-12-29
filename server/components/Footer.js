/* @flow */
import React from 'react';

type FooterProps = {
  copyright: string,
  footerLinks: any
};

const Footer = ({copyright, footerLinks}:FooterProps) => {
  return (
    <footer className="footer">
      <span className="copyright" dangerouslySetInnerHTML={{__html: copyright}} />
      <nav className="footer-links">
        {footerLinks.map(link => {
          return (<a href={link.href}>{link.text}</a>)
        })}
      </nav>
    </footer>
  );
};

export default Footer;
