const { GraphQLSchema } = require('graphql');
const getRootQuery = require('./Root');

const schema = (client) => {
  return new Promise((resolve, reject) => {
    getRootQuery(client).then(rootQuery => {
      const schema = new GraphQLSchema({
        query: rootQuery
      });

      resolve(schema);
    }).catch(err => {
      reject(err);
    });
  });
};

module.exports = schema;
