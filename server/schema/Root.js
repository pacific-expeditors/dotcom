const {
  GraphQLObjectType
} = require('graphql');
const cfGraphql = require('cf-graphql');

// User queries
const userQueries = require('../queries/User');

// Fetches the contentful space and creates a graphql schema
// Based on the space graph.
const createSpaceQueries = client => {
  return client.getContentTypes()
    .then(cfGraphql.prepareSpaceGraph)
    .then(spaceGraph => cfGraphql.queryFields(spaceGraph));
};

// Create the RootQuery type.
const getRootQuery = client => {
  const promise = new Promise((resolve, reject) => {
    return createSpaceQueries(client).then(queries => {
      const rootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
          ...userQueries,
          ...queries
        }
      });

      resolve(rootQuery);
    }).catch(err => {
      reject(err);
    });
  });

  return promise;
};

module.exports = getRootQuery;
