exports.id = "main";
exports.modules = {

/***/ "./src/containers/HeroVideo.js":
/*!*************************************!*\
  !*** ./src/containers/HeroVideo.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  query HeroVideo($id: ID!) {\\n    heroVideo(id:$id) {\\n      sys {\\n        id\\n      }\\n      heading\\n      subHeading\\n      cta\\n      link\\n      sources {\\n        url\\n      }\\n    }\\n  }\\n'], ['\\n  query HeroVideo($id: ID!) {\\n    heroVideo(id:$id) {\\n      sys {\\n        id\\n      }\\n      heading\\n      subHeading\\n      cta\\n      link\\n      sources {\\n        url\\n      }\\n    }\\n  }\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/index.js\");\n\nvar _graphqlTag = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n\nvar _graphqlTag2 = _interopRequireDefault(_graphqlTag);\n\nvar _lodash = __webpack_require__(/*! lodash.get */ \"./node_modules/lodash.get/index.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _HeroVideo = __webpack_require__(/*! ../components/HeroVideo */ \"./src/components/HeroVideo.js\");\n\nvar _HeroVideo2 = _interopRequireDefault(_HeroVideo);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar HeroVideoContainer = function (_Component) {\n  _inherits(HeroVideoContainer, _Component);\n\n  function HeroVideoContainer(props) {\n    _classCallCheck(this, HeroVideoContainer);\n\n    var _this = _possibleConstructorReturn(this, (HeroVideoContainer.__proto__ || Object.getPrototypeOf(HeroVideoContainer)).call(this, props));\n\n    props.data.refetch();\n    return _this;\n  }\n\n  _createClass(HeroVideoContainer, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.data;\n\n      var heroVideo = (0, _lodash2.default)(data, 'heroVideo', { sources: [] });\n      var sources = heroVideo.sources.map(function (source) {\n        return {\n          type: \"video/mp4\",\n          src: source.url\n        };\n      });\n\n      return _react2.default.createElement(_HeroVideo2.default, {\n        autoPlay: true,\n        loop: true,\n        heading: introductionVideo.heading,\n        subHeading: introductionVideo.subHeading,\n        cta: introductionVideo.cta,\n        link: introductionVideo.link,\n        sources: sources });\n    }\n  }]);\n\n  return HeroVideoContainer;\n}(_react.Component);\n\nexports.default = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {\n  options: function options(_ref) {\n    var id = _ref.id;\n\n    return {\n      variables: { id: id },\n      fetchPolicy: 'network-only'\n    };\n  }\n})(HeroVideoContainer);\n\n//# sourceURL=webpack:///./src/containers/HeroVideo.js?");

/***/ })

};