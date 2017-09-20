"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var copyright = _ref.copyright;

  return _react2.default.createElement(
    "footer",
    { className: "footer" },
    _react2.default.createElement("span", { className: "copyright", dangerouslySetInnerHTML: { __html: copyright } })
  );
};
exports.default = Footer;