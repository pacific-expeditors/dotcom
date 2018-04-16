exports.id = "main";
exports.modules = {

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  header: {\n    padding: '24px 0',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    position: 'relative',\n    width: 1170,\n    margin: '0 auto'\n  },\n  logoLink: {\n    display: 'block'\n  },\n  logo: {\n    display: 'block',\n    height: '52px'\n  },\n  navLeft: {\n    flex: 1,\n    display: 'flex'\n  },\n  navRight: {\n    display: 'flex',\n    flex: 1\n  },\n  navLinkContainer: {\n    position: 'relative',\n    margin: '0 auto'\n  },\n  navLink: {\n    fontSize: 14,\n    fontWeight: 900,\n    textTransform: 'uppercase',\n    textDecoration: 'none',\n    letterSpacing: '2px'\n  },\n  mobileMenu: {\n    backgroundColor: 'white',\n    padding: '20px',\n    position: 'absolute',\n    left: 0,\n    right: 0,\n    top: 0,\n    bottom: 0,\n    zIndex: 4\n  },\n  mobileTopRow: {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center'\n  },\n  mobileNavLink: {\n    fontSize: '36px',\n    fontWeight: 600,\n    textTransform: 'uppercase',\n    textDecoration: 'none',\n    marginBottom: '24px',\n    color: '#4F4F4F',\n    display: 'block'\n  },\n  closeIconLink: {\n    marginLeft: 'auto'\n  },\n  closeIcon: {\n    fill: '#4F4F4F'\n  },\n  menuIcon: {\n    fill: '#FFF'\n  },\n  mobileLogo: {\n    height: '28px'\n  },\n  mobileMenuLinks: {\n    margin: '20px 0'\n  }\n};\n\n\nvar menuIcon = '\\n<svg height=\"32px\" style=\"enable-background:new 0 0 32 32\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"32px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z\"/></svg>';\n\nvar closeIcon = '\\n<svg height=\"48\" viewBox=\"0 0 48 48\" width=\"48\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z\"/><path d=\"M0 0h48v48h-48z\" fill=\"none\"/></svg>';\n\nvar MobileHeader = function MobileHeader(_ref) {\n  var mobileLogo = _ref.mobileLogo,\n      title = _ref.title,\n      navLinks = _ref.navLinks;\n\n  return _react2.default.createElement(\n    'header',\n    { style: styles.mobileMenu, className: 'header-mobile' },\n    _react2.default.createElement(\n      'div',\n      { style: styles.mobileTopRow },\n      _react2.default.createElement('img', { className: 'logo', style: styles.mobileLogo, src: mobileLogo, alt: title }),\n      _react2.default.createElement(\n        'a',\n        { href: '#', 'aria-label': 'Close', className: 'close-icon-link', style: styles.closeIconLink },\n        _react2.default.createElement('span', { style: styles.closeIcon, dangerouslySetInnerHTML: { __html: closeIcon } })\n      )\n    ),\n    _react2.default.createElement(\n      'nav',\n      { key: 'mobileNav', style: styles.mobileMenuLinks, className: 'header-mobile-menu' },\n      navLinks.map(function (navLink) {\n        return _react2.default.createElement(\n          'a',\n          {\n            className: 'header-mobile-nav-link',\n            key: navLink.id,\n            href: navLink.href,\n            style: styles.mobileNavLink },\n          navLink.text\n        );\n      })\n    )\n  );\n};\n\nvar NavSection = function NavSection(_ref2) {\n  var navLink = _ref2.navLink;\n\n  return _react2.default.createElement(\n    'div',\n    {\n      className: 'header-nav-link',\n      key: navLink.sys.id,\n      style: styles.navLinkContainer },\n    _react2.default.createElement(\n      'a',\n      { style: styles.navLink, href: navLink.href },\n      navLink.text\n    )\n  );\n};\n\nvar DesktopHeader = function DesktopHeader(props) {\n  return _react2.default.createElement(\n    'header',\n    { className: 'header', style: styles.header },\n    _react2.default.createElement(\n      'nav',\n      { className: 'header-left-nav', key: 'leftNav', style: styles.navLeft },\n      props.navLinks.filter(function (navLink) {\n        return navLink.alignment === 'left';\n      }).map(function (navLink) {\n        return _react2.default.createElement(NavSection, { navLink: navLink });\n      })\n    ),\n    _react2.default.createElement(\n      'a',\n      { href: '/', style: styles.logoLink, className: 'logo-link' },\n      _react2.default.createElement('img', {\n        className: 'logo',\n        style: styles.logo,\n        src: props.logo,\n        setset: props.srcset,\n        alt: props.siteTitle })\n    ),\n    _react2.default.createElement(\n      'nav',\n      { className: 'header-right-nav', key: 'rightNav', style: styles.navRight },\n      props.navLinks.filter(function (navLink) {\n        return navLink.alignment === 'right';\n      }).map(function (navLink) {\n        return _react2.default.createElement(NavSection, { navLink: navLink });\n      })\n    )\n  );\n};\n\nvar Header = function Header(props) {\n  return _react2.default.createElement(\n    'div',\n    { className: 'header-container', style: styles.headerContainer },\n    _react2.default.createElement(DesktopHeader, props),\n    _react2.default.createElement(MobileHeader, props),\n    _react2.default.createElement(\n      'a',\n      { href: '#', className: 'mobile-menu-link', style: styles.menuIconLink },\n      _react2.default.createElement('span', { style: styles.menuIcon, dangerouslySetInnerHTML: { __html: menuIcon } })\n    )\n  );\n};\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ })

};