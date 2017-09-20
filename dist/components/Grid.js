'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(_ref) {
  var id = _ref.id,
      heading = _ref.heading,
      content = _ref.content,
      subText = _ref.subText,
      link = _ref.link,
      cta = _ref.cta,
      image = _ref.image,
      srcset = _ref.srcset,
      _ref$align = _ref.align,
      align = _ref$align === undefined ? 'normal' : _ref$align;

  return _react2.default.createElement(
    'div',
    { className: 'grid ' + align },
    _react2.default.createElement(
      'div',
      { className: 'col col-content' },
      _react2.default.createElement(
        'h3',
        { className: 'col-heading' },
        heading
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-text' },
        content
      ),
      _react2.default.createElement(
        'p',
        { className: 'col-sub-text' },
        subText
      ),
      link && _react2.default.createElement(
        _Button2.default,
        { link: link, style: 'primary' },
        cta
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'col col-image-container' },
      _react2.default.createElement('img', { className: 'col-image', src: image.url + '?w=610', srcset: srcset, alt: heading })
    )
  );
};

exports.default = Grid;