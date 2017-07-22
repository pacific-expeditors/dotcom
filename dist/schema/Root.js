'use strict';

var _graphql = require('graphql');

var _cfGraphql = require('cf-graphql');

// Fetches the contentful space and creates a graphql schema
// Based on the space graph.
var createSpaceQueries = function createSpaceQueries(client) {
  return client.getContentTypes().then(_cfGraphql.prepareSpaceGraph).then(function (spaceGraph) {
    return (0, _cfGraphql.createQueryFields)(spaceGraph);
  });
};

// Create the RootQuery type.
var getRootQuery = function getRootQuery(client) {
  var promise = new Promise(function (resolve, reject) {
    return createSpaceQueries(client).then(function (queries) {
      var rootQuery = new _graphql.GraphQLObjectType({
        name: 'RootQueryType',
        fields: queries
      });

      resolve(rootQuery);
    }).catch(function (err) {
      reject(err);
    });
  });

  return promise;
};

module.exports = getRootQuery;