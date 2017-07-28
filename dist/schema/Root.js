'use strict';

var _require = require('graphql'),
    GraphQLObjectType = _require.GraphQLObjectType;

var _require2 = require('cf-graphql'),
    createQueryFields = _require2.createQueryFields,
    prepareSpaceGraph = _require2.prepareSpaceGraph;

// Fetches the contentful space and creates a graphql schema
// Based on the space graph.


var createSpaceQueries = function createSpaceQueries(client) {
  return client.getContentTypes().then(prepareSpaceGraph).then(function (spaceGraph) {
    return createQueryFields(spaceGraph);
  });
};

// Create the RootQuery type.
var getRootQuery = function getRootQuery(client) {
  var promise = new Promise(function (resolve, reject) {
    return createSpaceQueries(client).then(function (queries) {
      var rootQuery = new GraphQLObjectType({
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