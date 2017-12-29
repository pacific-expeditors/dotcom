"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var copyright = _ref.copyright,
      footerLinks = _ref.footerLinks;

  return _react2.default.createElement(
    "footer",
    { className: "footer" },
    _react2.default.createElement("span", { className: "copyright", dangerouslySetInnerHTML: { __html: copyright } }),
    _react2.default.createElement(
      "nav",
      { className: "footer-links" },
      footerLinks.map(function (link) {
        return _react2.default.createElement(
          "a",
          { href: link.href },
          link.text
        );
      })
    )
  );
};
exports.default = Footer;