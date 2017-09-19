/* @flow */
import React from 'react';

type HeaderProps = {
  logo: string,
  mobileLogo: string,
  siteTitle: string
};

const styles = {
  header: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoLink: {
    display: 'block'
  },
  logo: {
    display: 'block',
    height: '32px'
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
          alt={props.title} />
      </a>
    </header>
  );
};

export default Header;
