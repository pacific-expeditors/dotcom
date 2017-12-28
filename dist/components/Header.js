'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
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


var SubNavLinks = function SubNavLinks(navLink) {
  if (navLink.subNavigationLinks && navLink.subNavigationLinks.length) {
    return _react2.default.createElement(
      'nav',
      { key: navLink.id, className: 'header-sub-nav' },
      navLink.subNavigationLinks.map(function (link) {
        return _react2.default.createElement(
          'a',
          { href: link.href, key: link.id, className: 'header-sub-nav-link' },
          link.text
        );
      })
    );
  }

  return null;
};

var NavSection = function NavSection(_ref) {
  var navLink = _ref.navLink;

  return _react2.default.createElement(
    'div',
    {
      className: 'header-nav-link',
      key: navLink.id,
      style: styles.navLinkContainer },
    _react2.default.createElement(
      'a',
      { style: styles.navLink, href: navLink.href },
      navLink.text
    ),
    _react2.default.createElement(SubNavLinks, { navLink: navLink })
  );
};

var Header = function Header(props) {
  return _react2.default.createElement(
    'header',
    { className: 'header', style: styles.header },
    _react2.default.createElement(
      'nav',
      { className: 'header-left-nav', key: 'leftNav', style: styles.navLeft },
      props.navLinks.filter(function (navLink) {
        return navLink.alignment === 'left';
      }).map(function (navLink) {
        return _react2.default.createElement(NavSection, { navLink: navLink });
      })
    ),
    _react2.default.createElement(
      'a',
      { href: '/', style: styles.logoLink, className: 'logo-link' },
      _react2.default.createElement('img', {
        className: 'logo',
        style: styles.logo,
        src: props.logo,
        setset: props.srcset,
        alt: props.siteTitle })
    ),
    _react2.default.createElement(
      'nav',
      { className: 'header-right-nav', key: 'rightNav', style: styles.navRight },
      props.navLinks.filter(function (navLink) {
        return navLink.alignment === 'right';
      }).map(function (navLink) {
        return _react2.default.createElement(NavSection, { navLink: navLink });
      })
    )
  );
};

exports.default = Header;