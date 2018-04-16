exports.id = "main";
exports.modules = {

/***/ "./src/containers/Grid.js":
/*!********************************!*\
  !*** ./src/containers/Grid.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  query Grid($id: ID!) {\\n    grid(id:$id) {\\n      sys {\\n        id\\n      }\\n      heading\\n      subText\\n      content\\n      cta\\n      align\\n      link\\n      columns {\\n        id\\n        icon\\n        style\\n        content\\n        heading\\n      }\\n      image {\\n        url\\n      }\\n    }\\n  }\\n'], ['\\n  query Grid($id: ID!) {\\n    grid(id:$id) {\\n      sys {\\n        id\\n      }\\n      heading\\n      subText\\n      content\\n      cta\\n      align\\n      link\\n      columns {\\n        id\\n        icon\\n        style\\n        content\\n        heading\\n      }\\n      image {\\n        url\\n      }\\n    }\\n  }\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/index.js\");\n\nvar _graphqlTag = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n\nvar _graphqlTag2 = _interopRequireDefault(_graphqlTag);\n\nvar _lodash = __webpack_require__(/*! lodash.get */ \"./node_modules/lodash.get/index.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _Grid = __webpack_require__(/*! ../components/Grid */ \"./src/components/Grid.js\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar GridContainer = function (_Component) {\n  _inherits(GridContainer, _Component);\n\n  function GridContainer() {\n    _classCallCheck(this, GridContainer);\n\n    return _possibleConstructorReturn(this, (GridContainer.__proto__ || Object.getPrototypeOf(GridContainer)).apply(this, arguments));\n  }\n\n  _createClass(GridContainer, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.data;\n\n      var grid = (0, _lodash2.default)(data, 'grid', {});\n\n      return _react2.default.createElement('div', null);\n\n      // return (\n      //   <Grid {...grid} />\n      // )\n    }\n  }]);\n\n  return GridContainer;\n}(_react.Component);\n\nexports.default = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {\n  options: function options(_ref) {\n    var id = _ref.id;\n\n    return {\n      variables: { id: id }\n    };\n  }\n})(GridContainer);\n\n//# sourceURL=webpack:///./src/containers/Grid.js?");

/***/ })

};