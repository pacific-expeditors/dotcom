/* @flow */
import React from 'react';

type HeaderProps = {
  logo: string,
  mobileLogo: string,
  siteTitle: string
};

const styles = {
  header: {
    padding: '24px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoLink: {
    display: 'block'
  },
  logo: {
    display: 'block',
    height: '52px'
  }
};

const Header = (props:HeaderProps) => {
  return (
    <header className="header" style={styles.header}>
      <a href="/" style={styles.logoLink} className="logo-link">
        <img
          className="logo"
          style={styles.logo}
          src={props.logo}
          setset={props.srcset}
          alt={props.siteTitle} />
      </a>
    </header>
  );
};

export default Header;
