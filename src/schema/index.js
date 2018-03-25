/* @flow */
import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { createQueryFields, prepareSpaceGraph } from 'cf-graphql'

export default (client) => {
  return new Promise((resolve, reject) => {
    client.getContentTypes()
      .then(prepareSpaceGraph)
      .then((spaceGraph) => createQueryFields(spaceGraph))
      .then((fields) => {
        const query = new GraphQLObjectType({
          name: 'RootQueryType',
          fields
        })

        const schema = new GraphQLSchema({query})

        resolve(schema)
      }).catch((err:String) => {
        reject(err)
      })
  })
}
