'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cards = require('./Cards');

var _Cards2 = _interopRequireDefault(_Cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardsWithBackground = function CardsWithBackground(_ref) {
  var heading = _ref.heading,
      image = _ref.image,
      _ref$cards = _ref.cards,
      cards = _ref$cards === undefined ? [] : _ref$cards;

  return _react2.default.createElement(
    'div',
    { className: 'cards-with-bg' },
    _react2.default.createElement('div', { className: 'cards-with-bg-container', style: { background: 'url(' + image.url + '?h=1920)' } }),
    _react2.default.createElement(
      'h3',
      { className: 'cards-with-bg-heading' },
      heading
    ),
    _react2.default.createElement(_Cards2.default, { cards: cards.cards })
  );
};

exports.default = CardsWithBackground;