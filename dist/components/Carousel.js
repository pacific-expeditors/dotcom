'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  carousel: {},
  slide: {
    width: '100%'
  }
};

var Carousel = function Carousel(_ref) {
  var slides = _ref.slides;

  return _react2.default.createElement(
    _reactSlick2.default,
    { arrows: true, autoplay: true, dots: true },
    slides.map(function (_ref2) {
      var src = _ref2.src,
          srcset = _ref2.srcset,
          alt = _ref2.alt;
      return _react2.default.createElement('img', {
        style: styles.slide,
        src: src,
        srcset: srcset,
        alt: alt });
    })
  );
};

exports.default = Carousel;