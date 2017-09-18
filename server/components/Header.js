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
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 2
  },
  logo: {
    height: '28px',
    opacity: 0
  },
  mobileLogo: {
    height: '28px'
  }
};

const Header = (props:HeaderProps) => {
  return (
    <div className="header-container">
      <header className="header" style={styles.header}>
        <a href="/">
          <img className="logo" style={styles.logo} src={logo} setset="" alt={title} />
        </a>
      </header>
    </div>
  );
};

export default Header;
