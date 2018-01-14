'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightAlignedTextCard = function RightAlignedTextCard(_ref) {
  var id = _ref.id,
      heading = _ref.heading,
      content = _ref.content,
      background = _ref.background,
      image = _ref.image,
      _ref$srcset = _ref.srcset,
      srcset = _ref$srcset === undefined ? [] : _ref$srcset;

  return _react2.default.createElement(
    'div',
    { key: id, id: '' + id, className: 'right-card-container' + (image ? ' right-card-alt' : '') },
    background && !image && _react2.default.createElement(
      'div',
      { className: 'right-card-background-images fade-in-obj' },
      _react2.default.createElement('img', {
        className: 'right-card-background-image lazyload',
        'data-src': background.url + '?w=1920',
        'data-srcset': srcset,
        alt: heading })
    ),
    _react2.default.createElement(
      'div',
      { className: 'right-card' },
      _react2.default.createElement(
        'div',
        { className: 'right-card-images fade-in-obj' },
        background && image && _react2.default.createElement(
          'div',
          { className: 'right-card-background-images' },
          _react2.default.createElement('img', {
            className: 'right-card-background-image lazyload',
            'data-src': background.url + '?w=1920',
            'data-srcset': srcset,
            alt: heading })
        ),
        image && _react2.default.createElement('img', {
          className: 'right-card-image lazyload',
          'data-src': image.url + '?w=610',
          'data-srcset': srcset,
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
        )
      )
    )
  );
};
exports.default = RightAlignedTextCard;