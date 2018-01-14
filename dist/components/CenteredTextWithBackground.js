'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CenteredTextWithBackground = function CenteredTextWithBackground(_ref) {
  var id = _ref.id,
      heading = _ref.heading,
      content = _ref.content,
      background = _ref.background,
      callToActionText = _ref.callToActionText,
      callToActionLink = _ref.callToActionLink;

  return _react2.default.createElement(
    'div',
    {
      key: id,
      id: id,
      className: 'text-with-background-container' },
    background && _react2.default.createElement(
      'div',
      { className: 'text-with-background-images fade-in-obj' },
      _react2.default.createElement('img', {
        className: 'text-with-background-image lazyload',
        'data-src': background.url + '?w=1920' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'text-with-background' },
      heading && _react2.default.createElement(
        'h2',
        { className: 'text-with-background-heading' },
        heading
      ),
      _react2.default.createElement(
        'p',
        { className: 'text-with-background-text' },
        content
      ),
      _react2.default.createElement(
        'div',
        { className: 'text-with-background-cta' },
        callToActionLink && callToActionText && _react2.default.createElement(
          _Button2.default,
          { style: 'secondary', link: callToActionLink },
          callToActionText
        )
      )
    )
  );
};

exports.default = CenteredTextWithBackground;