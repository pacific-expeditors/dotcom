exports.id = "main";
exports.modules = {

/***/ "./src/containers/Page.js":
/*!********************************!*\
  !*** ./src/containers/Page.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _templateObject = _taggedTemplateLiteral(['\\n  query Page($slug: String!) {\\n    pages(q:$slug) {\\n      id\\n      title\\n      metaDescription\\n      sections {\\n        sys {\\n          id\\n        }\\n        __typename\\n      }\\n    }\\n  }\\n'], ['\\n  query Page($slug: String!) {\\n    pages(q:$slug) {\\n      id\\n      title\\n      metaDescription\\n      sections {\\n        sys {\\n          id\\n        }\\n        __typename\\n      }\\n    }\\n  }\\n']);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _lodash = __webpack_require__(/*! lodash.get */ \"./node_modules/lodash.get/index.js\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/index.js\");\n\nvar _graphqlTag = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n\nvar _graphqlTag2 = _interopRequireDefault(_graphqlTag);\n\nvar _reactLoadable = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n\nvar _reactLoadable2 = _interopRequireDefault(_reactLoadable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _Modal = __webpack_require__(/*! ../components/Modal */ \"./src/components/Modal.js\");\n\nvar _Modal2 = _interopRequireDefault(_Modal);\n\nvar _index = __webpack_require__(/*! ./index */ \"./src/containers/index.js\");\n\nvar Containers = _interopRequireWildcard(_index);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfetch('http://localhost:5000/graphql?query={pages{id}}').then(function (res) {\n  return res.text();\n}).then(function (res) {\n  console.log(res);\n});\n\nvar Page = function (_Component) {\n  _inherits(Page, _Component);\n\n  function Page(props) {\n    _classCallCheck(this, Page);\n\n    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));\n\n    props.data.refetch();\n    return _this;\n  }\n\n  _createClass(Page, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var data = this.props.data;\n\n      var title = (0, _lodash2.default)(data, 'pages[0].title', '404');\n      var sections = (0, _lodash2.default)(data, 'pages[0].sections', [{ __typename: '404', sys: { id: 0 } }]);\n      var description = (0, _lodash2.default)(data, 'pages[0].metaDescription', \"\");\n      var url = \"http://www.pacificexpeditors.com/\";\n\n      return _react2.default.createElement(\n        'html',\n        { lang: 'en' },\n        _react2.default.createElement(\n          'head',\n          null,\n          _react2.default.createElement('meta', { charSet: 'UTF-8' }),\n          _react2.default.createElement('meta', { name: 'robots', content: 'noodp' }),\n          _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' }),\n          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0' }),\n          _react2.default.createElement('meta', { name: 'description', content: description }),\n          _react2.default.createElement('meta', { property: 'og:title', content: title }),\n          _react2.default.createElement('meta', { property: 'og:url', content: url }),\n          _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),\n          _react2.default.createElement('meta', { property: 'og:site_name', content: 'Pacific Expeditors' }),\n          _react2.default.createElement('meta', { property: 'twitter:site', content: '@Pac_Ex' }),\n          _react2.default.createElement('meta', { property: 'twitter:url', content: url }),\n          _react2.default.createElement('meta', { property: 'twitter:title', content: title }),\n          _react2.default.createElement('meta', { property: 'twitter:card', content: 'summary' }),\n          _react2.default.createElement('meta', { property: 'twitter:description', content: description }),\n          _react2.default.createElement(\n            'title',\n            null,\n            title\n          ),\n          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' }),\n          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' }),\n          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/main.css' }),\n          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/home.css' }),\n          _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,900', rel: 'stylesheet' }),\n          _react2.default.createElement('link', { rel: 'shortcut icon', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=16' }),\n          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=60' }),\n          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=76' }),\n          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=120' }),\n          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=152' }),\n          _react2.default.createElement('base', { href: '/' })\n        ),\n        _react2.default.createElement(\n          'body',\n          null,\n          _react2.default.createElement(\n            'div',\n            { className: 'page' },\n            _react2.default.createElement(_Modal2.default, null),\n            sections.map(function (section) {\n              var Section = Containers[section.__typename];\n\n              return _react2.default.createElement(Section, {\n                article: _this2.props.article,\n                key: section.sys.id,\n                id: section.sys.id });\n            })\n          ),\n          _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/3.0.0/lazysizes.min.js' }),\n          _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js' }),\n          _react2.default.createElement('script', { src: '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js' }),\n          _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js' }),\n          _react2.default.createElement('script', { src: '/static/client.js' }),\n          _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: '(function(i,s,o,g,r,a,m){i[\\'GoogleAnalyticsObject\\']=r;i[r]=i[r]||function(){\\n          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\\n          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\\n          })(window,document,\\'script\\',\\'https://www.google-analytics.com/analytics.js\\',\\'ga\\');\\n\\n          ga(\\'create\\', \\'UA-107156593-1\\', \\'auto\\');\\n          ga(\\'send\\', \\'pageview\\');' } })\n        )\n      );\n    }\n  }]);\n\n  return Page;\n}(_react.Component);\n\nexports.default = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {\n  options: function options(_ref) {\n    var slug = _ref.slug;\n\n    return {\n      variables: {\n        slug: 'fields.id=' + slug\n      },\n      fetchPolicy: 'network-only'\n    };\n  }\n})(Page);\n\n//# sourceURL=webpack:///./src/containers/Page.js?");

/***/ })

};