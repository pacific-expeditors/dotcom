'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Cards = require('./Cards');

var _Cards2 = _interopRequireDefault(_Cards);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardsWithHeading = function CardsWithHeading(_ref) {
  var heading = _ref.heading,
      _ref$cards = _ref.cards,
      cards = _ref$cards === undefined ? [] : _ref$cards,
      callToActionText = _ref.callToActionText,
      callToActionLink = _ref.callToActionLink;

  return _react2.default.createElement(
    'div',
    { className: 'cards-with-header' },
    _react2.default.createElement(
      'h3',
      { className: 'cards-header' },
      heading
    ),
    _react2.default.createElement(_Cards2.default, { cards: cards.cards }),
    _react2.default.createElement(
      'div',
      { className: 'cards-with-header-cta' },
      callToActionText && callToActionLink && _react2.default.createElement(
        _Button2.default,
        { link: callToActionLink },
        callToActionText
      )
    )
  );
};
exports.default = CardsWithHeading;