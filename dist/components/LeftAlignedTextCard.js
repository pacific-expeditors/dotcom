"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftAlignedTextCard = function LeftAlignedTextCard(_ref) {
  var id = _ref.id,
      heading = _ref.heading,
      content = _ref.content,
      background = _ref.background,
      image = _ref.image,
      _ref$srcset = _ref.srcset,
      srcset = _ref$srcset === undefined ? [] : _ref$srcset;

  return _react2.default.createElement(
    "div",
    {
      key: id,
      id: id,
      className: "left-card-container" },
    background && !image && _react2.default.createElement(
      "div",
      { className: "left-card-background-images fade-in-obj" },
      _react2.default.createElement("img", {
        className: "left-card-background-image lazyload",
        "data-src": background.url + "?w=1920",
        "data-srcset": srcset,
        alt: heading })
    ),
    _react2.default.createElement(
      "div",
      { className: "left-card" },
      _react2.default.createElement(
        "div",
        { className: "left-card-text-container" + (!image ? " left-card-alt" : '') },
        _react2.default.createElement(
          "h3",
          { className: "left-card-heading" },
          heading
        ),
        _react2.default.createElement(
          "div",
          { className: "left-card-text" },
          content
        )
      ),
      image && _react2.default.createElement(
        "div",
        { className: "left-card-image-container fade-in-obj" },
        background && _react2.default.createElement(
          "div",
          { className: "left-card-background-images" },
          _react2.default.createElement("img", {
            className: "left-card-background-image lazyload",
            "data-src": background.url + "?w=1920",
            "data-srcset": srcset,
            alt: heading })
        ),
        _react2.default.createElement("img", {
          className: "left-card-image lazyload",
          "data-src": image.url + "?w=610",
          "data-srcset": srcset,
          alt: heading })
      )
    )
  );
};
exports.default = LeftAlignedTextCard;