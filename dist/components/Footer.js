"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var logo = _ref.logo,
      title = _ref.title,
      _ref$footerLinks = _ref.footerLinks,
      footerLinks = _ref$footerLinks === undefined ? [] : _ref$footerLinks,
      copyright = _ref.copyright;

  return _react2.default.createElement(
    "footer",
    { className: "footer" },
    _react2.default.createElement(
      "div",
      { className: "footer-row" },
      _react2.default.createElement(
        "div",
        { className: "footer-logo" },
        _react2.default.createElement("img", { src: logo, alt: title, className: "footer-logo-img" })
      ),
      footerLinks.length ? _react2.default.createElement(
        "ul",
        { className: "footer-links" },
        footerLinks.map(function (link) {
          return _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: link, className: "footer-social-link" },
              link
            )
          );
        })
      ) : null
    ),
    _react2.default.createElement(
      "div",
      { className: "footer-row" },
      _react2.default.createElement(
        "span",
        { className: "copyright" },
        copyright
      )
    )
  );
};
exports.default = Footer;