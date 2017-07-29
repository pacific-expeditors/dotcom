"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
  return _react2.default.createElement(
    "div",
    { className: "contact" },
    _react2.default.createElement(
      "div",
      { className: "address" },
      _react2.default.createElement(
        "h3",
        { className: "h3" },
        "Pacific Expeditors"
      ),
      "1550 Airport Blvd. Suite 201",
      _react2.default.createElement("br", null),
      "Santa Rosa, CA 95403"
    ),
    _react2.default.createElement(
      "div",
      { className: "form" },
      _react2.default.createElement(
        "form",
        { id: "form" },
        _react2.default.createElement(
          "h2",
          { className: "h2" },
          "Contact Us"
        ),
        _react2.default.createElement("div", { id: "msg", className: "msg" }),
        _react2.default.createElement("input", {
          className: "textfield",
          pattern: "[A-Za-z .]+",
          type: "text",
          name: "name",
          required: true,
          placeholder: "Name" }),
        _react2.default.createElement("input", {
          className: "textfield",
          type: "email",
          name: "email",
          pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$",
          required: true,
          placeholder: "Email" }),
        _react2.default.createElement("input", {
          className: "textfield",
          type: "tel",
          name: "phoneNumber",
          required: true,
          placeholder: "Phone Number" }),
        _react2.default.createElement("input", {
          className: "textfield",
          type: "text",
          name: "company",
          placeholder: "Company" }),
        _react2.default.createElement(
          "select",
          { className: "select", name: "contactMethod" },
          _react2.default.createElement(
            "option",
            { value: "Email" },
            "Email"
          ),
          _react2.default.createElement(
            "option",
            { value: "Phone" },
            "Phone"
          )
        ),
        _react2.default.createElement("textarea", { className: "textarea", name: "msg" }),
        _react2.default.createElement("input", { className: "button", type: "submit", value: "Send" })
      )
    )
  );
};
exports.default = Contact;