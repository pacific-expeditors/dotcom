'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {},
  heading: {
    textAlign: 'center',
    fontFamily: 'Europa',
    fontSize: 36,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    color: '#4F4F4F',
    margin: '12px 0'
  },
  content: {
    textAlign: 'center',
    fontFamily: 'Europa',
    fontSize: 16,
    fontWeight: 300,
    color: '#A6A6A6',
    padding: '8px 0'
  }
};


var Error404 = function Error404() {
  return _react2.default.createElement(
    'div',
    { className: 'error-404' },
    _react2.default.createElement(
      'h2',
      { style: styles.heading },
      'Page Not Found'
    ),
    _react2.default.createElement(
      'p',
      { style: styles.content },
      'Sorry the page you were looking for does not exist.'
    )
  );
};

exports.default = Error404;