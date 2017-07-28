'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    position: 'relative',
    overflow: 'hidden'
  },
  video: {},
  source: {},
  overlay: {
    background: 'rgba(0, 0, 0, .5)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1
  },
  logo: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 3,
    margin: 'auto',
    border: 'none'
  }
};


var IntroVideo = function IntroVideo(_ref) {
  var _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === undefined ? true : _ref$autoplay,
      _ref$loop = _ref.loop,
      loop = _ref$loop === undefined ? true : _ref$loop,
      src = _ref.src,
      _ref$sources = _ref.sources,
      sources = _ref$sources === undefined ? [] : _ref$sources,
      logo = _ref.logo;

  return _react2.default.createElement(
    'div',
    { className: 'video-container', style: styles.container },
    _react2.default.createElement(
      'video',
      {
        className: 'video',
        style: styles.video,
        poster: styles.poster,
        autoPlay: true,
        loop: loop,
        src: src },
      sources.map(function (_ref2) {
        var type = _ref2.type,
            src = _ref2.src;
        return _react2.default.createElement('source', { style: styles.source, type: type, src: src });
      })
    ),
    _react2.default.createElement('div', { className: 'video-overlay', style: styles.overlay }),
    _react2.default.createElement('img', { className: 'video-logo', style: styles.logo, src: logo, alt: '' })
  );
};

exports.default = IntroVideo;