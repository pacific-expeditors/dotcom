exports.id = "main";
exports.modules = {

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  header: {\n    display: 'flex',\n    padding: '24px 0',\n    alignItems: 'center',\n    justifyContent: 'center',\n    position: 'relative'\n  },\n  logoLink: {\n    display: 'block'\n  },\n  logo: {\n    display: 'block',\n    height: '52px'\n  },\n  navLeft: {\n    flex: 1,\n    display: 'flex'\n  },\n  navRight: {\n    display: 'flex',\n    flex: 1\n  },\n  navLinkContainer: {\n    position: 'relative',\n    margin: '0 auto'\n  },\n  navLink: {\n    fontSize: 14,\n    fontWeight: 900,\n    textTransform: 'uppercase',\n    textDecoration: 'none',\n    letterSpacing: '2px'\n  },\n  mobileMenu: {\n    backgroundColor: 'white',\n    padding: '20px',\n    position: 'absolute',\n    left: 0,\n    right: 0,\n    top: 0,\n    bottom: 0,\n    zIndex: 4\n  },\n  mobileTopRow: {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    position: 'absolute',\n    left: 0,\n    right: 0,\n    top: '20px'\n  },\n  mobileNavLink: {\n    fontSize: '36px',\n    fontWeight: 600,\n    textTransform: 'uppercase',\n    textDecoration: 'none',\n    marginBottom: '24px',\n    color: '#4F4F4F',\n    display: 'block'\n  },\n  closeIconLink: {\n    marginLeft: 'auto'\n  },\n  closeIcon: {\n    fill: '#4F4F4F'\n  },\n  menuIcon: {\n    fill: '#FFF'\n  },\n  mobileLogo: {\n    height: '28px'\n  },\n  mobileMenuLinks: {\n    margin: '20px 0'\n  }\n};\n\n\nvar MobileHeader = function MobileHeader(_ref) {\n  var mobileLogo = _ref.mobileLogo,\n      logo = _ref.logo,\n      title = _ref.title,\n      navLinks = _ref.navLinks;\n\n  return _react2.default.createElement(\n    'header',\n    { style: styles.mobileMenu, className: 'header-mobile' },\n    _react2.default.createElement('img', { className: 'logo', style: styles.logo, src: logo, alt: title }),\n    _react2.default.createElement(\n      'nav',\n      { key: 'mobileNav', style: styles.mobileMenuLinks, className: 'header-mobile-menu-links' },\n      navLinks.map(function (navLink) {\n        return _react2.default.createElement(\n          'a',\n          {\n            className: 'header-mobile-nav-link',\n            key: navLink.sys.id,\n            href: navLink.href,\n            style: styles.mobileNavLink },\n          navLink.text\n        );\n      })\n    )\n  );\n};\n\nvar NavSection = function NavSection(_ref2) {\n  var navLink = _ref2.navLink;\n\n  return _react2.default.createElement(\n    'div',\n    {\n      className: 'header-nav-link',\n      key: navLink.sys.id,\n      style: styles.navLinkContainer },\n    _react2.default.createElement(\n      'a',\n      { style: styles.navLink, href: navLink.href },\n      navLink.text\n    )\n  );\n};\n\nvar DesktopHeader = function DesktopHeader(props) {\n  return _react2.default.createElement(\n    'header',\n    { className: 'header', style: styles.header },\n    _react2.default.createElement(\n      'nav',\n      { className: 'header-left-nav', key: 'leftNav', style: styles.navLeft },\n      props.navLinks.filter(function (navLink) {\n        return navLink.alignment === 'left';\n      }).map(function (navLink) {\n        return _react2.default.createElement(NavSection, { navLink: navLink });\n      })\n    ),\n    _react2.default.createElement(\n      'a',\n      { href: '/', style: styles.logoLink, className: 'logo-link' },\n      _react2.default.createElement('img', {\n        className: 'logo',\n        style: styles.logo,\n        src: props.logo,\n        setset: props.srcset,\n        alt: props.siteTitle })\n    ),\n    _react2.default.createElement(\n      'nav',\n      { className: 'header-right-nav', key: 'rightNav', style: styles.navRight },\n      props.navLinks.filter(function (navLink) {\n        return navLink.alignment === 'right';\n      }).map(function (navLink) {\n        return _react2.default.createElement(NavSection, { navLink: navLink });\n      })\n    )\n  );\n};\n\nvar Header = function Header(props) {\n  return _react2.default.createElement(\n    'div',\n    { className: 'header-container' },\n    _react2.default.createElement(DesktopHeader, props),\n    _react2.default.createElement(MobileHeader, props),\n    _react2.default.createElement(\n      'a',\n      { href: 'javascript:void(0);', className: 'mobile-menu-link', style: styles.menuIconLink },\n      _react2.default.createElement(\n        'div',\n        { className: 'mobile-menu-icon' },\n        _react2.default.createElement(\n          'div',\n          { className: 'mobile-menu-icon-inner' },\n          _react2.default.createElement('div', { className: 'mobile-menu-icon-before' }),\n          _react2.default.createElement('div', { className: 'mobile-menu-icon-after' })\n        )\n      )\n    )\n  );\n};\n\nexports.default = Header;\n\n//# sourceURL=webpack:///./src/components/Header.js?");

/***/ })

};