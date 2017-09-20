/* @flow */
import React from 'react';

type FooterProps = {
  copyright: string
};

const Footer = ({copyright}:FooterProps) => {
  return (
    <footer className="footer">
      <span className="copyright" dangerouslySetInnerHTML={{__html: copyright}} />
    </footer>
  );
};

export default Footer;
