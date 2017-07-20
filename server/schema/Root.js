/* @flow */
import { GraphQLObjectType } from 'graphql';
import { createQueryFields, prepareSpaceGraph } from 'cf-graphql';

// Fetches the contentful space and creates a graphql schema
// Based on the space graph.
const createSpaceQueries = (client:any) => {
  return client.getContentTypes()
    .then(prepareSpaceGraph)
    .then(spaceGraph => createQueryFields(spaceGraph));
};

// Create the RootQuery type.
const getRootQuery = (client:any) => {
  const promise = new Promise((resolve, reject) => {
    return createSpaceQueries(client).then(queries => {
      const rootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: queries
      });

      resolve(rootQuery);
    }).catch(err => {
      reject(err);
    });
  });

  return promise;
};

export default getRootQuery;
