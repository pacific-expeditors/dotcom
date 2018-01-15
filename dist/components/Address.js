"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Address = function Address(_ref) {
  var name = _ref.name,
      map = _ref.map,
      streetName = _ref.streetName,
      city = _ref.city,
      state = _ref.state,
      zip = _ref.zip,
      phoneNumber = _ref.phoneNumber,
      email = _ref.email;

  return _react2.default.createElement(
    "div",
    { className: "address-container" },
    _react2.default.createElement(
      "div",
      { className: "address-info" },
      _react2.default.createElement(
        "h2",
        { className: "address-heading" },
        name
      ),
      _react2.default.createElement(
        "address",
        { className: "address-address" },
        streetName,
        _react2.default.createElement("br", null),
        city,
        ", ",
        state,
        " ",
        zip,
        _react2.default.createElement("br", null),
        phoneNumber,
        _react2.default.createElement("br", null),
        _react2.default.createElement(
          "a",
          { href: "mailto:" + email },
          email
        )
      )
    ),
    _react2.default.createElement("div", { className: "address-map", dangerouslySetInnerHTML: { __html: map } })
  );
};
exports.default = Address;