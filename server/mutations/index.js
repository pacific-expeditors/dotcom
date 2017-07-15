const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const signUp = require('./SignUp');
const logIn = require('./LogIn');
const user = require('./User');

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp,
    logIn,
    user
  }
});

module.exports = Mutation;
