"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(_ref) {
  var _ref$leftItems = _ref.leftItems,
      leftItems = _ref$leftItems === undefined ? [] : _ref$leftItems,
      _ref$rightItems = _ref.rightItems,
      rightItems = _ref$rightItems === undefined ? [] : _ref$rightItems;

  return _react2.default.createElement(
    "div",
    { className: "list" },
    _react2.default.createElement(
      "div",
      { className: "list-container" },
      _react2.default.createElement(
        "ul",
        { className: "list-left" },
        leftItems.map(function (item) {
          return _react2.default.createElement(
            "li",
            { className: "list-item" },
            item
          );
        })
      ),
      _react2.default.createElement(
        "ul",
        { className: "list-right" },
        rightItems.map(function (item) {
          return _react2.default.createElement(
            "li",
            { className: "list-item" },
            item
          );
        })
      )
    )
  );
};

exports.default = List;