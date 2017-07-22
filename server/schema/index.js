/* @flow */
import { GraphQLSchema } from 'graphql';
import getRootQuery from './Root';

const schema = (client:any) => {
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
