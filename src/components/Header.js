/* @flow */
import * as React from 'react'
import uuid from 'uuid/v4'

type HeaderProps = {
  logo: string,
  mobileLogo: string,
  title: string
}

const MobileMenu = ({logo, title, navLinks}:HeaderProps):React.Node => {
  return (
    <div className="header-mobile-menu">
      <img className="mobile-logo" src={logo} alt={title} />
      <nav className="mobile-menu-links">
        {navLinks.map((navLink) => {
          return (
            <a
              className="mobile-nav-link"
              key={navLink.sys.id}
              target={navLink.href.startsWith("http") ? "_self" : "_blank"}
              rel={navLink.href.startsWith("http") ? "noopener noreferrer" : ""}
              href={navLink.href}
            >
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
    <div className="header-mobile">
      <a href="/" className="header-mobile-link">
          <img
            className="logo"
            src={mobileLogo}
            alt={siteTitle} />
        </a>
    </div>
  )
}

const NavSection = ({navLink}):React.Node => {
  return (
    <a
      href={navLink.href}
      target={navLink.href.startsWith("http") ? "_blank" : "_self"}
      rel={navLink.href.startsWith("http") ? "noopener noreferrer" : ""}
      className="header-nav-link"
      key={`link${navLink.sys.id}`}
    >
      {navLink.text}
    </a>
  )
}

const MobileIcon = ():React.Node => {
  return (
    <a href="javascript:void(0);" className="mobile-close-link">
      <div className="mobile-close-icon">
        <div className="mobile-close-icon-inner">
          <div className="mobile-close-icon-before"></div>
          <div className="mobile-close-icon-after"></div>
        </div>
      </div>
    </a>
  )
}

const DesktopHeader = (props:Props):React.Node => {
  return (
    <header className="header">
      <nav className="header-left-nav">
        {props.navLinks.filter(navLink => navLink.alignment === 'left').map((navLink) => {
          return <NavSection key={uuid()} navLink={navLink} />
        })}
      </nav>
      <a href="/" className="logo-link">
        <img
          className="logo"
          src={props.logo}
          setset={props.srcset}
          alt={props.siteTitle} />
      </a>
      <nav className="header-right-nav">
        {props.navLinks.filter(navLink => navLink.alignment === 'right').map((navLink) => {
          return <NavSection key={uuid()} navLink={navLink} />
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
