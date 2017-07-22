"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cards = function Cards(_ref) {
  var _ref$cards = _ref.cards,
      cards = _ref$cards === undefined ? [] : _ref$cards;

  return _react2.default.createElement(
    "div",
    { className: "cards" },
    cards.map(function (_ref2) {
      var link = _ref2.link,
          heading = _ref2.heading,
          image = _ref2.image;
      return _react2.default.createElement(
        "a",
        { href: link, className: "card" },
        _react2.default.createElement("img", { className: "card-image", src: image, alt: heading }),
        _react2.default.createElement(
          "div",
          { className: "card-overlay" },
          _react2.default.createElement(
            "h3",
            { className: "card-heading" },
            heading
          )
        )
      );
    })
  );
};

exports.default = Cards;