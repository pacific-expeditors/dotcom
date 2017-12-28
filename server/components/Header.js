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
    justifyContent: 'space-between',
    position: 'relative',
    width: 1170,
    margin: '0 auto'
  },
  logoLink: {
    display: 'block'
  },
  logo: {
    display: 'block',
    height: '52px'
  },
  navLeft: {
    flex: 1,
    display: 'flex'
  },
  navRight: {
    display: 'flex',
    flex: 1
  },
  navLinkContainer: {
    position: 'relative',
    margin: '0 auto'
  },
  navLink: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0f4c61',
    textTransform: 'uppercase',
    textDecoration: 'none',
    letterSpacing: '2px'
  }
};

const SubNavLinks = (navLink) => {
  if (navLink.subNavigationLinks && navLink.subNavigationLinks.length) {
    return (
      <nav key={navLink.id} className="header-sub-nav">
        {navLink.subNavigationLinks.map(link => {
          return (
            <a href={link.href} key={link.id} className="header-sub-nav-link">{link.text}</a>
          )
        })}
      </nav>
    );
  }

  return null;
};

const NavSection = ({navLink}) => {
  return (
    <div
      className="header-nav-link"
      key={navLink.id}
      style={styles.navLinkContainer}>
        <a style={styles.navLink} href={navLink.href}>{navLink.text}</a>
        <SubNavLinks navLink={navLink} />
    </div>
  );
}

const Header = (props:HeaderProps) => {
  return (
    <header className="header" style={styles.header}>
      <nav className="header-left-nav" key="leftNav" style={styles.navLeft}>
        {props.navLinks.filter(navLink => navLink.alignment === 'left').map(navLink => {
          return <NavSection navLink={navLink} />
        })}
      </nav>
      <a href="/" style={styles.logoLink} className="logo-link">
        <img
          className="logo"
          style={styles.logo}
          src={props.logo}
          setset={props.srcset}
          alt={props.siteTitle} />
      </a>
      <nav className="header-right-nav" key="rightNav" style={styles.navRight}>
        {props.navLinks.filter(navLink => navLink.alignment === 'right').map(navLink => {
          return <NavSection navLink={navLink} />
        })}
      </nav>
    </header>
  );
};

export default Header;
