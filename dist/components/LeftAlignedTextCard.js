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
      opaqueTextBackground = _ref.opaqueTextBackground;

  return _react2.default.createElement(
    "div",
    {
      key: id,
      id: id,
      className: "left-card-container" },
    !opaqueTextBackground && background && _react2.default.createElement(
      "div",
      { className: "left-card-background-images fade-in-obj" },
      _react2.default.createElement("img", {
        className: "left-card-background-image lazyload",
        "data-src": background.url + "?w=1920",
        alt: heading })
    ),
    _react2.default.createElement(
      "div",
      { className: "left-card" },
      _react2.default.createElement(
        "div",
        { className: "left-card-text-container" + (!opaqueTextBackground ? " left-card-alt" : '') },
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
      _react2.default.createElement(
        "div",
        { className: "left-card-image-container fade-in-obj" },
        opaqueTextBackground && background && _react2.default.createElement(
          "div",
          { className: "left-card-background-images" },
          _react2.default.createElement("img", {
            className: "left-card-background-image-opaque lazyload",
            "data-src": background.url + "?w=1920",
            alt: heading })
        ),
        opaqueTextBackground && image && _react2.default.createElement("img", {
          className: "left-card-image lazyload",
          "data-src": image.url + "?w=610",
          alt: heading })
      )
    )
  );
};
exports.default = LeftAlignedTextCard;