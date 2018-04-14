exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"./node_modules/express/index.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressGraphql = __webpack_require__(/*! express-graphql */ \"./node_modules/express-graphql/dist/index.js\");\n\nvar _expressGraphql2 = _interopRequireDefault(_expressGraphql);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"./node_modules/body-parser/index.js\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cors = __webpack_require__(/*! cors */ \"./node_modules/cors/lib/index.js\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _cfGraphql = __webpack_require__(/*! cf-graphql */ \"./node_modules/cf-graphql/src/index.js\");\n\nvar _cfGraphql2 = _interopRequireDefault(_cfGraphql);\n\nvar _schema = __webpack_require__(/*! ./schema */ \"./src/schema/index.js\");\n\nvar _schema2 = _interopRequireDefault(_schema);\n\nvar _renderUi = __webpack_require__(/*! ./utils/render-ui */ \"./src/utils/render-ui.js\");\n\nvar _renderUi2 = _interopRequireDefault(_renderUi);\n\n__webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-node.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").load();\n\nvar app = (0, _express2.default)();\napp.use((0, _cors2.default)());\napp.use(_bodyParser2.default.json());\napp.use('/static', _express2.default.static('dist'));\n\nfetch('http://localhost:5000/graphql?query={pages{id}}').then(function (res) {\n  console.log(res);\n});\n\nif (process.env.OFFLINE === 'false') {\n  var client = _cfGraphql2.default.createClient({\n    spaceId: process.env.CONTENTFUL_SPACE_ID,\n    cdaToken: process.env.CONTENTFUL_CDA_TOKEN,\n    cmaToken: process.env.CONTENTFUL_CMA_TOKEN\n  });\n\n  (0, _schema2.default)(client).then(function (schema) {\n    var ui = _cfGraphql2.default.helpers.graphiql({ title: 'GraphQL Server' });\n    app.get('/graphiql', function (_, res) {\n      res.set(ui.headers).status(ui.statusCode).end(ui.body);\n    });\n    var opts = { version: true, timeline: true, detailedErrors: false };\n    var ext = _cfGraphql2.default.helpers.expressGraphqlExtension(client, schema, opts);\n    app.use('/graphql', (0, _expressGraphql2.default)(ext));\n    app.use('/', (0, _renderUi2.default)());\n  }).catch(function (err) {\n    console.log(err);\n  });\n}\n\nvar port = process.env.PORT || 5000;\napp.listen(port, function () {\n  return console.log('Running on port ' + port);\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ })

};