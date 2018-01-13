"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeaturedArticle = function FeaturedArticle(_ref) {
  var id = _ref.id,
      attachments = _ref.attachments,
      title = _ref.title,
      excerpt = _ref.excerpt;

  return _react2.default.createElement(
    "div",
    {
      key: id,
      id: id,
      className: "featured-articles-container" },
    _react2.default.createElement(
      "div",
      { className: "featured-article" },
      _react2.default.createElement(
        "div",
        { className: "featured-article-attachments fade-in-obj" },
        _react2.default.createElement("img", {
          className: "featured-article-attachment-image lazyload",
          "data-src": attachments[0].url + "?w=1920" })
      ),
      _react2.default.createElement(
        "div",
        { className: "featured-article-text" },
        _react2.default.createElement(
          "h2",
          { className: "featured-article-heading" },
          title
        ),
        _react2.default.createElement(
          "p",
          { className: "featured-article-text-excerpt" },
          excerpt
        )
      )
    )
  );
};
exports.default = FeaturedArticle;