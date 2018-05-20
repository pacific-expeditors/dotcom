/* @flow */
import * as React from 'react'

type NavProps = {

}

type HeaderProps = {
  logo: string,
  mobileLogo: string,
  title: string
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
    width: '195px'
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
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 4,
    display: 'flex',
    flexDirection: 'column'
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
    fontSize: '28px',
    fontWeight: 600,
    textTransform: 'uppercase',
    textDecoration: 'none',
    marginBottom: '12px',
    color: '#4F4F4F',
    display: 'block'
  },
  mobileHeader: {
    position: 'absolute',
    top: '28px',
    left: '28px',
    right: 0,
    zIndex: 4
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
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  }
}

const MobileMenu = ({logo, title, navLinks}:HeaderProps):React.Node => {
  return (
    <div style={styles.mobileMenu} className="header-mobile-menu">
      <img key={logo} className="logo" style={styles.logo} src={logo} alt={title} />
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
    </div>
  )
}

const MobileHeader = ({siteTitle, mobileLogo}:HeaderProps):React.Node => {
  return (
    <div style={styles.mobileHeader} className="header-mobile">
      <a href="/" style={styles.logoLink} className="header-mobile-link">
          <img
            key={mobileLogo}
            className="header-mobile-logo"
            style={styles.logo}
            src={mobileLogo}
            alt={siteTitle} />
        </a>
    </div>
  )
}

const NavSection = ({navLink}):React.Node => {
  return (
    <div
      className="header-nav-link"
      key={navLink.sys.id}
      style={styles.navLinkContainer}>
        <a style={styles.navLink} href={navLink.href}>{navLink.text}</a>
    </div>
  )
}

const MobileIcon = ():React.Node => {
  return (
    <a href="javascript:void(0);" className="mobile-menu-link" style={styles.menuIconLink}>
      <div className="mobile-menu-icon">
        <div className="mobile-menu-icon-inner">
          <div className="mobile-menu-icon-before"></div>
          <div className="mobile-menu-icon-after"></div>
        </div>
      </div>
    </a>
  )
}

const DesktopHeader = (props:Props):React.Node => {
  return (
    <header className="header" style={styles.header}>
      <nav className="header-left-nav" key="leftNav" style={styles.navLeft}>
        {props.navLinks.filter(navLink => navLink.alignment === 'left').map((navLink) => {
          return <NavSection navLink={navLink} />
        })}
      </nav>
      <a href="/" style={styles.logoLink} className="logo-link">
        <img
          key={props.logo}
          className="logo"
          style={styles.logo}
          src={props.logo}
          setset={props.srcset}
          alt={props.siteTitle} />
      </a>
      <nav className="header-right-nav" key="rightNav" style={styles.navRight}>
        {props.navLinks.filter(navLink => navLink.alignment === 'right').map((navLink) => {
          return <NavSection navLink={navLink} />
        })}
      </nav>
    </header>
  )
}

const Header = (props:HeaderProps):React.Node => {
  return (
    <div className="header-container">
      <DesktopHeader {...props} />
      <MobileHeader {...props} />
      <MobileMenu {...props} />
      <MobileIcon />
    </div>
  )
}

export default Header
