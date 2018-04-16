exports.id = "main";
exports.modules = {

/***/ "./src/components/Cards.js":
/*!*********************************!*\
  !*** ./src/components/Cards.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Button = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Cards = function Cards(_ref) {\n  var _ref$cards = _ref.cards,\n      cards = _ref$cards === undefined ? [] : _ref$cards;\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'cards' },\n    cards.map(function (card) {\n      return _react2.default.createElement(\n        'div',\n        { id: card.sys.id, key: card.sys.id, className: 'card invisible' },\n        _react2.default.createElement(\n          'div',\n          { className: 'card-image-container' },\n          _react2.default.createElement('img', {\n            className: 'card-image lazyload',\n            'data-src': card.image.url + '?w=1024',\n            'data-srcset': card.srcset,\n            alt: card.heading }),\n          card.overlayImage && _react2.default.createElement(\n            'div',\n            { className: 'card-overlay' },\n            _react2.default.createElement(\n              'h3',\n              { className: 'card-heading' },\n              card.heading\n            ),\n            _react2.default.createElement(\n              'h4',\n              { className: 'card-sub-heading' },\n              card.subHeading\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'card-content' },\n          !card.overlayImage && _react2.default.createElement(\n            'h3',\n            { className: 'card-heading' },\n            card.heading\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'card-text' },\n            card.content\n          ),\n          card.link && _react2.default.createElement(\n            _Button2.default,\n            { link: card.link, style: 'primary' },\n            card.cta\n          )\n        )\n      );\n    })\n  );\n};\n\nexports.default = Cards;\n\n//# sourceURL=webpack:///./src/components/Cards.js?");

/***/ })

};