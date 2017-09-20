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
      headings.map(function (heading) {
        return _react2.default.createElement(
          'span',
          null,
          heading
        );
      })
    ),
    _react2.default.createElement(_Cards2.default, { cards: cards.cards })
  );
};

exports.default = CardsWithHeading;