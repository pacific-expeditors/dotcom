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
    justifyContent: 'center'
  },
  logoLink: {
    display: 'block'
  },
  logo: {
    display: 'block',
    height: '52px'
  }
};


var Header = function Header(props) {
  return _react2.default.createElement(
    'header',
    { className: 'header', style: styles.header },
    _react2.default.createElement(
      'a',
      { href: '/', style: styles.logoLink, className: 'logo-link' },
      _react2.default.createElement('img', {
        className: 'logo',
        style: styles.logo,
        src: props.logo,
        setset: props.srcset,
        alt: props.siteTitle })
    )
  );
};

exports.default = Header;