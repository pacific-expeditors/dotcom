'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _subHeading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  container: {
    position: 'relative',
    overflow: 'hidden'
  },
  subPageHero: {
    width: '1170px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'center'
  },
  subPageHeading: {
    fontSize: '48px',
    margin: 0,
    fontWeight: 500,
    letterSpacing: '1.5px',
    lineHeight: 1,
    color: '#fff',
    textTransform: 'uppercase'
  },
  hr: {
    background: '#fff',
    width: '132px',
    height: '4px',
    margin: '20px 0'
  },
  subHeading: (_subHeading = {
    fontSize: '22px',
    margin: 0,
    lineHeight: 1.5,
    color: '#fff'
  }, _defineProperty(_subHeading, 'margin', '20px 0'), _defineProperty(_subHeading, 'fontWeight', 300), _subHeading)
};

var SubPageHero = function SubPageHero(_ref) {
  var heading = _ref.heading,
      subText = _ref.subText,
      background = _ref.background;

  return _react2.default.createElement(
    'div',
    { className: 'subpage-hero-container', style: _extends({}, styles.container, {
        background: 'url(' + background.url + ')'
      }) },
    _react2.default.createElement(
      'div',
      { className: 'subpage-hero', style: styles.subPageHero },
      _react2.default.createElement(
        'h1',
        { className: 'subpage-hero-heading', style: styles.subPageHeading },
        heading
      ),
      _react2.default.createElement('div', { style: styles.hr, className: 'subpage-hero-hr' }),
      _react2.default.createElement(
        'div',
        { style: styles.subHeading, className: 'subpage-hero-subheading' },
        subText
      )
    )
  );
};

exports.default = SubPageHero;