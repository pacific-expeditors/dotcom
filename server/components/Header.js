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
  },
  mobileMenu: {
    backgroundColor: 'white',
    padding: '20px',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 4
  },
  mobileTopRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mobileNavLink: {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    textDecoration: 'none',
    marginBottom: '24px',
    color: '#4F4F4F',
    display: 'block'
  },
  closeIconLink: {
    marginLeft: 'auto'
  },
  closeIcon: {
    fill: '#4F4F4F'
  },
  menuIcon: {
    fill: '#FFF'
  },
  mobileLogo: {
    height: '28px'
  },
  mobileMenuLinks: {
    margin: '20px 0'
  }
};

const menuIcon = `
<svg height="32px" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>`;

const closeIcon = `
<svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>`;

const MobileHeader = ({mobileLogo, title, navLinks}:HeaderProps) => {
  return (
    <header style={styles.mobileMenu} className="header-mobile">
      <div style={styles.mobileTopRow}>
        <img className="logo" style={styles.mobileLogo} src={mobileLogo} alt={title} />
        <a href="#" aria-label="Close" className="close-icon-link" style={styles.closeIconLink}>
          <span style={styles.closeIcon} dangerouslySetInnerHTML={{__html: closeIcon}} />
        </a>
      </div>
      <nav key="mobileNav" style={styles.mobileMenuLinks} className="header-mobile-menu">
        {navLinks.map(navLink => {
          return (
            <a
              className="header-mobile-nav-link"
              key={navLink.id}
              href={navLink.href}
              style={styles.mobileNavLink}>
                {navLink.text}
            </a>
          );
        })}
      </nav>
    </header>
  );
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

const DesktopHeader = (props:Props) => {
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
  )
}

const Header = (props:HeaderProps) => {
  return (
    <div className="header-container" style={styles.headerContainer}>
      <DesktopHeader {...props} />
      <MobileHeader {...props} />
      <a href="#" className="mobile-menu-link" style={styles.menuIconLink}>
        <span style={styles.menuIcon} dangerouslySetInnerHTML={{__html: menuIcon }} />
      </a>
    </div>
  );
};

export default Header;
