exports.id = "main";
exports.modules = {

/***/ "./src/containers/Providers.js":
/*!*************************************!*\
  !*** ./src/containers/Providers.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _templateObject = _taggedTemplateLiteral(['\\n    query Pages {\\n      pages {\\n        sys {\\n          id\\n        }\\n      }\\n    }\\n  '], ['\\n    query Pages {\\n      pages {\\n        sys {\\n          id\\n        }\\n      }\\n    }\\n  ']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _graphqlTag = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n\nvar _graphqlTag2 = _interopRequireDefault(_graphqlTag);\n\nvar _apolloClient = __webpack_require__(/*! apollo-client */ \"./node_modules/apollo-client/index.js\");\n\nvar _apolloLinkHttp = __webpack_require__(/*! apollo-link-http */ \"./node_modules/apollo-link-http/lib/index.js\");\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/index.js\");\n\nvar _apolloCacheInmemory = __webpack_require__(/*! apollo-cache-inmemory */ \"./node_modules/apollo-cache-inmemory/lib/index.js\");\n\n__webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-node.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config();\n\nvar client = new _apolloClient.ApolloClient({\n  ssrMode: true,\n  link: (0, _apolloLinkHttp.createHttpLink)({\n    uri: process.env.GRAPHQL_ENDPOINT\n  }),\n  cache: new _apolloCacheInmemory.InMemoryCache({\n    dataIdFromObject: function dataIdFromObject(object) {\n      return object.sys && object.sys.id;\n    }\n  })\n});\n\nconsole.log(client.readQuery({\n  query: (0, _graphqlTag2.default)(_templateObject)\n}));\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        _reactApollo.ApolloProvider,\n        { client: client },\n        this.props.children\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n\n//# sourceURL=webpack:///./src/containers/Providers.js?");

/***/ })

};