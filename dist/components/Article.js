"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function Article(_ref) {
  var id = _ref.id,
      title = _ref.title,
      description = _ref.description,
      attachments = _ref.attachments;

  return _react2.default.createElement(
    "article",
    { className: "article-container" },
    _react2.default.createElement(
      "div",
      { className: "article" },
      _react2.default.createElement(
        "h2",
        { className: "article-heading" },
        title
      ),
      _react2.default.createElement(
        "div",
        { className: "article-body" },
        description
      )
    )
  );
};
exports.default = Article;