/* @flow */
import React from 'react';

type NavLinks = {
  href: string,
  text: string,
  alignment?: 'left' | 'right'
};

type HeaderProps = {
  logo: string,
  mobileLogo: string,
  title: string,
  navLinks: [NavLinks]
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
  headerNavLink: {

  },
  logo: {
    height: '28px',
    opacity: 0
  },
  navLeft: {
    flex: 1,
    marginLeft: '-20px'
  },
  navRight: {
    marginRight: 'auto',
    textAlign: 'right',
    flex: 1,
    marginLeft: '-20px'
  },
  navLinkContainer: {
    position: 'relative',
    display: 'inline-flex',
    marginLeft: '20px'
  },
  navLink: {
    fontFamily: 'Europa',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
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
<svg height="32px" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>`

const closeIcon = `
<svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>`

const MobileHeader = ({mobileLogo, title, navLinks}:HeaderProps) => {
  return (
    <header style={styles.mobileMenu} className="header-mobile">
      <div style={styles.mobileTopRow}>
        <img className="logo" style={styles.mobileLogo} src={mobileLogo} alt={title} />
        <a href="#" className="close-icon-link" style={styles.closeIconLink}>
          <span style={styles.closeIcon} dangerouslySetInnerHTML={{__html: closeIcon}} />
        </a>
      </div>
      <nav style={styles.mobileMenuLinks} className="header-mobile-menu">
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

const DesktopHeader = ({logo, title, navLinks}:HeaderProps) => {
  return (
    <header className="header" style={styles.header}>
      <nav className="header-left-nav" key="leftNav" style={styles.navLeft}>
        {navLinks.map(navLink => {
          let subNavLinks
          if (navLink.subNavigationLinks && navLink.subNavigationLinks.length) {
            subNavLinks = (
              <nav key={navLink.id} className="header-sub-nav">
                {navLink.subNavigationLinks.map(link => {
                  return <a href={link.href} key={link.id} className="header-sub-nav-link">{link.text}</a>
                })}
              </nav>
            );
          }

          if (navLink.alignment === 'left') {
            return (
              <div
                className="header-nav-link"
                key={navLink.id}
                style={styles.navLinkContainer}>
                  <a style={styles.navLink} href={navLink.href}>{navLink.text}</a>
                  {subNavLinks}
              </div>
            );
          }
        })}
      </nav>
      <a href="/">
        <img className="logo" style={styles.logo} src={logo} alt={title} />
      </a>
      <nav className="header-right-nav" key="rightNav" style={styles.navRight}>
        {navLinks.map(navLink => {
          if (navLink.alignment === 'right') {
            let subNavLinks
            if (navLink.subNavigationLinks && navLink.subNavigationLinks.length) {
              subNavLinks = (
                <nav className="header-sub-nav">
                  {navLink.subNavigationLinks.map(link => {
                    return <a href={link.href} key={link.href} className="header-sub-nav-link">{link.text}</a>
                  })}
                </nav>
              );
            }

            return (
              <div
                className="header-nav-link"
                key={navLink.id}
                style={styles.navLinkContainer}>
                  <a style={styles.navLink} href={navLink.href}>{navLink.text}</a>
                  {subNavLinks}
              </div>
            );
          }
        })}
      </nav>
    </header>
  );
};

const Header = (props:HeaderProps) => {
  return (
    <div className="header-container">
      <DesktopHeader {...props} />
      <MobileHeader {...props} />
      <a href="#" className="mobile-menu-link" style={styles.menuIconLink}>
        <span style={styles.menuIcon} dangerouslySetInnerHTML={{__html: menuIcon }} />
      </a>
    </div>
  );
};

export default Header;
