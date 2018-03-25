exports.ids = [4];
exports.modules = {

/***/ "./src/components/Cards.js":
/*!*********************************!*\
  !*** ./src/components/Cards.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Button = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Cards = function Cards(_ref) {\n  var _ref$cards = _ref.cards,\n      cards = _ref$cards === undefined ? [] : _ref$cards;\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'cards' },\n    cards.map(function (card) {\n      return _react2.default.createElement(\n        'div',\n        { id: card.id, key: card.id, className: 'card' },\n        _react2.default.createElement(\n          'div',\n          { className: 'card-image-container fade-in-obj' },\n          _react2.default.createElement('img', {\n            className: 'card-image lazyload',\n            'data-src': card.image.url + '?w=1024',\n            'data-srcset': card.srcset,\n            alt: card.heading }),\n          card.overlayImage && _react2.default.createElement(\n            'div',\n            { className: 'card-overlay' },\n            _react2.default.createElement(\n              'h3',\n              { className: 'card-heading' },\n              card.heading\n            ),\n            _react2.default.createElement(\n              'h4',\n              { className: 'card-sub-heading' },\n              card.subHeading\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'card-content' },\n          !card.overlayImage && _react2.default.createElement(\n            'h3',\n            { className: 'card-heading' },\n            card.heading\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'card-text' },\n            card.content\n          ),\n          card.link && _react2.default.createElement(\n            _Button2.default,\n            { link: card.link, style: 'primary' },\n            card.cta\n          )\n        )\n      );\n    })\n  );\n};\n\nexports.default = Cards;\n\n//# sourceURL=webpack:///./src/components/Cards.js?");

/***/ }),

/***/ "./src/components/CardsWithHeading.js":
/*!********************************************!*\
  !*** ./src/components/CardsWithHeading.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Cards = __webpack_require__(/*! ./Cards */ \"./src/components/Cards.js\");\n\nvar _Cards2 = _interopRequireDefault(_Cards);\n\nvar _Button = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar CardsWithHeading = function CardsWithHeading(_ref) {\n  var heading = _ref.heading,\n      _ref$cards = _ref.cards,\n      cards = _ref$cards === undefined ? [] : _ref$cards,\n      callToActionText = _ref.callToActionText,\n      callToActionLink = _ref.callToActionLink;\n\n  return _react2.default.createElement(\n    'div',\n    { className: 'cards-with-header' },\n    _react2.default.createElement(\n      'h3',\n      { className: 'cards-header' },\n      heading\n    ),\n    _react2.default.createElement(_Cards2.default, { cards: cards.cards }),\n    _react2.default.createElement(\n      'div',\n      { className: 'cards-with-header-cta' },\n      callToActionText && callToActionLink && _react2.default.createElement(\n        _Button2.default,\n        { link: callToActionLink },\n        callToActionText\n      )\n    )\n  );\n};\nexports.default = CardsWithHeading;\n\n//# sourceURL=webpack:///./src/components/CardsWithHeading.js?");

/***/ }),

/***/ "./src/containers/CardsWithHeading.js":
/*!********************************************!*\
  !*** ./src/containers/CardsWithHeading.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  query CardsWithHeading($id: ID!) {\\n    cardsWithHeading(id:$id) {\\n      id\\n      heading\\n      callToActionLink\\n      callToActionText\\n      cards {\\n        id\\n        cards {\\n          id\\n          heading\\n          link\\n          cta\\n          content\\n          image {\\n            url\\n          }\\n        }\\n      }\\n    }\\n  }\\n'], ['\\n  query CardsWithHeading($id: ID!) {\\n    cardsWithHeading(id:$id) {\\n      id\\n      heading\\n      callToActionLink\\n      callToActionText\\n      cards {\\n        id\\n        cards {\\n          id\\n          heading\\n          link\\n          cta\\n          content\\n          image {\\n            url\\n          }\\n        }\\n      }\\n    }\\n  }\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/index.js\");\n\nvar _graphqlTag = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n\nvar _graphqlTag2 = _interopRequireDefault(_graphqlTag);\n\nvar _lodash = __webpack_require__(/*! lodash.get */ \"./node_modules/lodash.get/index.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _CardsWithHeading = __webpack_require__(/*! ../components/CardsWithHeading */ \"./src/components/CardsWithHeading.js\");\n\nvar _CardsWithHeading2 = _interopRequireDefault(_CardsWithHeading);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar CardsWithHeadingContainer = function (_Component) {\n  _inherits(CardsWithHeadingContainer, _Component);\n\n  function CardsWithHeadingContainer(props) {\n    _classCallCheck(this, CardsWithHeadingContainer);\n\n    var _this = _possibleConstructorReturn(this, (CardsWithHeadingContainer.__proto__ || Object.getPrototypeOf(CardsWithHeadingContainer)).call(this, props));\n\n    props.data.refetch();\n    return _this;\n  }\n\n  _createClass(CardsWithHeadingContainer, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.data;\n\n      var cardsWithHeading = (0, _lodash2.default)(data, 'cardsWithHeading', {});\n\n      return _react2.default.createElement(_CardsWithHeading2.default, cardsWithHeading);\n    }\n  }]);\n\n  return CardsWithHeadingContainer;\n}(_react.Component);\n\nexports.default = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {\n  options: function options(_ref) {\n    var id = _ref.id;\n\n    return {\n      variables: { id: id },\n      fetchPolicy: 'network-only'\n    };\n  }\n})(CardsWithHeadingContainer);\n\n//# sourceURL=webpack:///./src/containers/CardsWithHeading.js?");

/***/ })

};;