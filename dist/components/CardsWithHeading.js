'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cards = require('./Cards');

var _Cards2 = _interopRequireDefault(_Cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardsWithHeading = function CardsWithHeading(_ref) {
  var heading = _ref.heading,
      _ref$cards = _ref.cards,
      cards = _ref$cards === undefined ? [] : _ref$cards;

  var headings = heading.split('/');

  return _react2.default.createElement(
    'div',
    { className: 'cards-with-header' },
    _react2.default.createElement(
      'h3',
      { className: 'cards-header' },
      _react2.default.createElement(
        'span',
        null,
        headings[0]
      ),
      _react2.default.createElement('img', { src: '//images.contentful.com/i9tcznuksxng/rOLTliS0gggQcE4miIICo/b3213715b01e719d4d8be05afdb54e57/c-d-arrows.svg', alt: '' }),
      _react2.default.createElement(
        'span',
        null,
        headings[1]
      )
    ),
    _react2.default.createElement(_Cards2.default, { cards: cards.cards })
  );
};

exports.default = CardsWithHeading;