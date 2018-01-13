"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
  var copyright = _ref.copyright,
      logo = _ref.logo,
      footerLinks = _ref.footerLinks,
      socialMediaLinks = _ref.socialMediaLinks;

  return _react2.default.createElement(
    "footer",
    { className: "footer" },
    _react2.default.createElement(
      "div",
      { className: "footer-container" },
      _react2.default.createElement(
        "div",
        { className: "copyright" },
        _react2.default.createElement("img", { className: "copyright-logo", src: logo.url, alt: logo.title }),
        _react2.default.createElement("span", { className: "copyright-text", dangerouslySetInnerHTML: { __html: copyright } })
      ),
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
      ),
      _react2.default.createElement(
        "nav",
        { className: "social-media-links" },
        socialMediaLinks.map(function (link) {
          return _react2.default.createElement(
            "a",
            { href: link.link },
            link.title
          );
        })
      )
    )
  );
};
exports.default = Footer;