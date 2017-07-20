'use strict';

var express = require('express');
var expressGraphQL = require('express-graphql');
var cors = require('cors');
var cfGraphql = require('cf-graphql');
var renderUi = require('./render-ui');
var purgeCache = require('./cache');

var startServer = function startServer(client, schema) {
  var app = express();

  app.use(cors());

  var ui = cfGraphql.helpers.graphiql({ title: 'GraphQL Server' });
  app.get('/graphiql', function (_, res) {
    return res.set(ui.headers).status(ui.statusCode).end(ui.body);
  });

  var opts = { version: true, timeline: true, detailedErrors: false };
  var ext = cfGraphql.helpers.expressGraphqlExtension(client, schema, opts);

  app.use('/graphql', expressGraphQL(ext));
  app.use('/', renderUi());

  app.post('/purge_cache', purgeCache);

  var port = process.env.PORT || 5000;
  app.listen(port, function () {
    return console.log('Running on port ' + port);
  });
};

module.exports = startServer;