'use strict';

var _require = require('graphql'),
    GraphQLSchema = _require.GraphQLSchema;

var getRootQuery = require('./Root');

var schema = function schema(client) {
  return new Promise(function (resolve, reject) {
    getRootQuery(client).then(function (rootQuery) {
      var schema = new GraphQLSchema({
        query: rootQuery
      });

      resolve(schema);
    }).catch(function (err) {
      reject(err);
    });
  });
};

module.exports = schema;