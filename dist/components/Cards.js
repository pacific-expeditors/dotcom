'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cards = function Cards(_ref) {
  var _ref$cards = _ref.cards,
      cards = _ref$cards === undefined ? [] : _ref$cards;

  return _react2.default.createElement(
    'div',
    { className: 'cards' },
    cards.map(function (card) {
      return _react2.default.createElement(
        'div',
        { key: card.id, className: 'card' },
        _react2.default.createElement(
          'div',
          { className: 'card-image-container' },
          _react2.default.createElement('img', { className: 'card-image', src: card.image.url + '?w=1024', srcset: card.srcset, alt: card.heading }),
          card.overlayImage && _react2.default.createElement(
            'div',
            { className: 'card-overlay' },
            _react2.default.createElement(
              'h3',
              { className: 'card-heading' },
              card.heading
            ),
            _react2.default.createElement(
              'h4',
              { className: 'card-sub-heading' },
              card.subHeading
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-content' },
          !card.overlayImage && _react2.default.createElement(
            'h3',
            { className: 'card-heading' },
            card.heading
          ),
          _react2.default.createElement(
            'div',
            { className: 'card-text' },
            card.content
          ),
          card.link && _react2.default.createElement(
            _Button2.default,
            { link: card.link, style: 'primary' },
            card.cta
          )
        )
      );
    })
  );
};

exports.default = Cards;