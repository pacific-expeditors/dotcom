'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightAlignedTextCard = function RightAlignedTextCard(_ref) {
  var id = _ref.id,
      heading = _ref.heading,
      content = _ref.content,
      background = _ref.background,
      image = _ref.image,
      callToActionLink = _ref.callToActionLink,
      callToActionText = _ref.callToActionText,
      opaqueTextBackground = _ref.opaqueTextBackground;

  return _react2.default.createElement(
    'div',
    { key: id, id: '' + id, className: 'right-card-container' + (image ? ' right-card-alt' : '') },
    !opaqueTextBackground && background && _react2.default.createElement(
      'div',
      { className: 'right-card-background-images fade-in-obj' },
      _react2.default.createElement('img', {
        className: 'right-card-background-image lazyload',
        'data-src': background.url + '?w=1920',
        alt: heading })
    ),
    _react2.default.createElement(
      'div',
      { className: 'right-card' },
      _react2.default.createElement(
        'div',
        { className: 'right-card-images fade-in-obj' },
        background && opaqueTextBackground && _react2.default.createElement(
          'div',
          { className: 'right-card-background-images' },
          _react2.default.createElement('img', {
            className: 'right-card-background-image lazyload',
            'data-src': background.url + '?w=1920',
            alt: heading })
        ),
        image && _react2.default.createElement('img', {
          className: 'right-card-image lazyload',
          'data-src': image.url + '?w=610',
          alt: heading })
      ),
      _react2.default.createElement(
        'div',
        { className: 'right-card-text-container' },
        _react2.default.createElement(
          'h3',
          { className: 'right-card-heading' },
          heading
        ),
        _react2.default.createElement(
          'div',
          { className: 'right-card-text' },
          content
        ),
        callToActionLink && callToActionText && _react2.default.createElement(
          _Button2.default,
          { style: opaqueTextBackground ? 'primary' : 'secondary', link: callToActionLink },
          callToActionText
        )
      )
    )
  );
};

exports.default = RightAlignedTextCard;