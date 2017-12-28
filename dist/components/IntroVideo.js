'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subHeading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  overlayContainer: {
    width: '1170px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  cta: {
    width: '400px'
  },
  heading: {
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

var IntroVideo = function IntroVideo(_ref) {
  var _ref$autoplay = _ref.autoplay,
      autoplay = _ref$autoplay === undefined ? true : _ref$autoplay,
      _ref$loop = _ref.loop,
      loop = _ref$loop === undefined ? true : _ref$loop,
      src = _ref.src,
      _ref$sources = _ref.sources,
      sources = _ref$sources === undefined ? [] : _ref$sources,
      heading = _ref.heading,
      subHeading = _ref.subHeading,
      cta = _ref.cta,
      link = _ref.link;

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
        var _ref2$type = _ref2.type,
            type = _ref2$type === undefined ? "video/mp4" : _ref2$type,
            src = _ref2.src;
        return _react2.default.createElement('source', { key: src, style: styles.source, type: type, src: src });
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'video-overlay', style: styles.overlay },
      _react2.default.createElement(
        'div',
        { className: 'video-overlay-container', style: styles.overlayContainer },
        _react2.default.createElement(
          'div',
          { style: styles.cta, className: 'video-cta' },
          _react2.default.createElement(
            'h1',
            { style: styles.heading, className: 'video-cta-heading' },
            heading
          ),
          _react2.default.createElement('div', { style: styles.hr, className: 'video-hr' }),
          _react2.default.createElement(
            'div',
            { style: styles.subHeading, className: 'video-cta-subheading' },
            subHeading
          ),
          _react2.default.createElement(
            _Button2.default,
            { link: link, style: 'secondary' },
            cta
          )
        )
      )
    )
  );
};

exports.default = IntroVideo;