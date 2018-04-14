exports.id = "main";
exports.modules = {

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"./node_modules/express/index.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _expressGraphql = __webpack_require__(/*! express-graphql */ \"./node_modules/express-graphql/dist/index.js\");\n\nvar _expressGraphql2 = _interopRequireDefault(_expressGraphql);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"./node_modules/body-parser/index.js\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cors = __webpack_require__(/*! cors */ \"./node_modules/cors/lib/index.js\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _cfGraphql = __webpack_require__(/*! cf-graphql */ \"./node_modules/cf-graphql/src/index.js\");\n\nvar _cfGraphql2 = _interopRequireDefault(_cfGraphql);\n\nvar _schema = __webpack_require__(/*! ./schema */ \"./src/schema/index.js\");\n\nvar _schema2 = _interopRequireDefault(_schema);\n\nvar _renderUi = __webpack_require__(/*! ./utils/render-ui */ \"./src/utils/render-ui.js\");\n\nvar _renderUi2 = _interopRequireDefault(_renderUi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").load();\n\n\nvar app = (0, _express2.default)();\n// app.use(cors())\n// app.use(bodyParser.json())\n// app.use('/static', express.static('dist'))\n\n// if (process.env.OFFLINE === 'false') {\n//   const client = cfGraphql.createClient({\n//     spaceId: process.env.CONTENTFUL_SPACE_ID,\n//     cdaToken: process.env.CONTENTFUL_CDA_TOKEN,\n//     cmaToken: process.env.CONTENTFUL_CMA_TOKEN\n//   })\n\n//   getSchema(client).then((schema) => {\n//     const ui = cfGraphql.helpers.graphiql({title: 'GraphQL Server'})\n//     app.get('/graphiql', (_, res) => {\n//       res.set(ui.headers).status(ui.statusCode).end(ui.body)\n//     })\n//     const opts = {version: true, timeline: true, detailedErrors: false}\n//     const ext = cfGraphql.helpers.expressGraphqlExtension(client, schema, opts)\n//     app.use('/graphql', expressGraphQL(ext))\n//     app.use('/', renderUi())\n//   })\n//   .catch((err:String) => {\n//     console.log(err)\n//   })\n// }\n\nvar port = process.env.PORT || 5000;\napp.listen(port, function () {\n  return console.log('Running on port ' + port);\n});\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ })

};