const { GraphQLSchema } = require('graphql');
const getRootQuery = require('./Root');
const Mutation = require('../mutations');

const schema = client => {
  return new Promise((resolve, reject) => {
    getRootQuery(client).then(rootQuery => {
      const schema = new GraphQLSchema({
        query: rootQuery,
        mutation: Mutation
      });

      resolve(schema);
    }).catch(err => {
      reject(err);
    });
  });
};

module.exports = schema;
