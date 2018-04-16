exports.id = "main";
exports.modules = {

/***/ "./src/utils/render-ui.js":
/*!********************************!*\
  !*** ./src/utils/render-ui.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"./node_modules/express/index.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _Root = __webpack_require__(/*! ../containers/Root */ \"./src/containers/Root.js\");\n\nvar _Root2 = _interopRequireDefault(_Root);\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n  var app = (0, _express2.default)();\n  app.use('/static', _express2.default.static('server/assets'));\n\n  app.get('/:slug?/:article?', function (req, res) {\n    var slug = req.params.slug ? req.params.slug : 'home';\n    var article = req.params.article ? req.params.article : '';\n    var Component = (0, _react.createElement)(_Root2.default, { slug: slug, article: article });\n    console.log(slug, article);\n\n    (0, _reactApollo.renderToStringWithData)(Component).then(function (body) {\n      res.send('<!doctype>' + body);\n    }).catch(function (err) {\n      res.send(err);\n    });\n  });\n\n  return app;\n};\n\n//# sourceURL=webpack:///./src/utils/render-ui.js?");

/***/ })

};