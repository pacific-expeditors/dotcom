/* @flow */
import React from 'react';

type FooterProps = {
  title: string,
  copyright: string
};

const Footer = ({logo, title, footerLinks = [], copyright}:FooterProps) => {
  return (
    <footer className="footer">
      <span className="copyright">
        {copyright}
      </span>
    </footer>
  );
};

export default Footer;
