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
    overflow: 'hidden',
    height: '70vh'
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
  },
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


var typekit = 'try{Typekit.load({ async: true });}catch(e){}';
var src = '//videos.contentful.com/i9tcznuksxng/1xGfj5KOqsugAYikaQQgqO/2ec3c5f4fbadfb9e5cf420523a82e4b0/out.mp4';
var sources = ['video/mp4'];
var logo = 'https://images.contentful.com/i9tcznuksxng/2gxfR9rxvWMmeIQimesekM/6e61a05dd10bd098cc6754141562058f/PacExLogoWhite.svg';

var Offline = function Offline() {
  return _react2.default.createElement(
    'html',
    { lang: 'en' },
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement(
        'title',
        null,
        'Website Offline | Pacific Expeditors'
      ),
      _react2.default.createElement('meta', { charset: 'utf-8' }),
      _react2.default.createElement('meta', { 'http-equiv': 'robots', content: 'noindex,nofollow' }),
      _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0' }),
      _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' }),
      _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/components.min.css' }),
      _react2.default.createElement('link', { rel: 'shortcut icon', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=16' }),
      _react2.default.createElement('script', { src: 'https://use.typekit.net/rnz3htj.js' }),
      _react2.default.createElement(
        'script',
        null,
        typekit
      )
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement(
        'div',
        { className: 'video-container', style: styles.container },
        _react2.default.createElement(
          'video',
          {
            className: 'video',
            style: styles.video,
            poster: styles.poster,
            autoPlay: true,
            loop: false,
            src: src },
          sources.map(function (_ref) {
            var type = _ref.type,
                src = _ref.src;
            return _react2.default.createElement('source', { key: type, style: styles.source, type: type, src: src });
          })
        ),
        _react2.default.createElement('div', { className: 'video-overlay', style: styles.overlay }),
        _react2.default.createElement('img', { className: 'video-logo', style: styles.logo, src: logo, alt: 'Pacific Expeditors' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'offline' },
        _react2.default.createElement(
          'h2',
          { style: styles.heading },
          'Website Offline'
        ),
        _react2.default.createElement(
          'p',
          { style: styles.content },
          'Thanks for visiting Pacific Expeditors. Unfortunately, website is currently offline. Please come back soon.'
        )
      )
    )
  );
};

exports.default = Offline;