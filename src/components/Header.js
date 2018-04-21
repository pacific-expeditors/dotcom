/* @flow */
import React from 'react'

type HeaderProps = {
  logo: string,
  mobileLogo: string,
  siteTitle: string
}

const styles = {
  header: {
    display: 'flex',
    padding: '24px 0',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
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
    fontWeight: 900,
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
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '20px'
  },
  mobileNavLink: {
    fontSize: '36px',
    fontWeight: 600,
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
}

const MobileHeader = ({mobileLogo, logo, title, navLinks}:HeaderProps) => {
  return (
    <header style={styles.mobileMenu} className="header-mobile">
      <img className="logo" style={styles.logo} src={logo} alt={title} />
      <nav key="mobileNav" style={styles.mobileMenuLinks} className="header-mobile-menu-links">
        {navLinks.map((navLink) => {
          return (
            <a
              className="header-mobile-nav-link"
              key={navLink.sys.id}
              href={navLink.href}
              style={styles.mobileNavLink}>
                {navLink.text}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

const NavSection = ({navLink}) => {
  return (
    <div
      className="header-nav-link"
      key={navLink.sys.id}
      style={styles.navLinkContainer}>
        <a style={styles.navLink} href={navLink.href}>{navLink.text}</a>
    </div>
  )
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
    <div className="header-container">
      <DesktopHeader {...props} />
      <MobileHeader {...props} />
      <a href="javascript:void(0);" className="mobile-menu-link" style={styles.menuIconLink}>
        <div className="mobile-menu-icon">
          <div className="mobile-menu-icon-inner">
            <div className="mobile-menu-icon-before"></div>
            <div className="mobile-menu-icon-after"></div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Header
