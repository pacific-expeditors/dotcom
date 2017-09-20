'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var children = _ref.children,
      link = _ref.link,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? 'primary' : _ref$style,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === undefined ? false : _ref$fullWidth;

  if (link) {
    return _react2.default.createElement(
      'a',
      { href: link, className: 'button ' + style + (fullWidth ? ' full-width' : '') },
      children
    );
  }

  return _react2.default.createElement('input', {
    type: 'submit',
    value: children,
    className: 'button ' + style + (fullWidth ? ' full-width' : '') });
};
exports.default = Button;