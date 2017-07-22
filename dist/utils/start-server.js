'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _cfGraphql = require('cf-graphql');

var _cfGraphql2 = _interopRequireDefault(_cfGraphql);

var _renderUi = require('./render-ui');

var _renderUi2 = _interopRequireDefault(_renderUi);

var _cache = require('./cache');

var _cache2 = _interopRequireDefault(_cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var startServer = function startServer(client, schema) {
  var app = (0, _express2.default)();
  app.use('/static', _express2.default.static('dist/assets'));

  app.use((0, _cors2.default)());

  var ui = _cfGraphql2.default.helpers.graphiql({ title: 'GraphQL Server' });
  app.get('/graphiql', function (_, res) {
    return res.set(ui.headers).status(ui.statusCode).end(ui.body);
  });

  var opts = { version: true, timeline: true, detailedErrors: false };
  var ext = _cfGraphql2.default.helpers.expressGraphqlExtension(client, schema, opts);

  app.use('/graphql', (0, _expressGraphql2.default)(ext));
  app.use('/', (0, _renderUi2.default)());

  app.post('/purge_cache', _cache2.default);

  var port = process.env.PORT || 5000;
  app.listen(port, function () {
    return console.log('Running on port ' + port);
  });
};

module.exports = startServer;