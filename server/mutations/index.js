import graphql from 'graphql';
const { GraphQLObjectType } = graphql;
import signUp from './SignUp';
import logIn from './LogIn';
import user from './User';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp,
    logIn,
    user
  }
});

module.exports = Mutation;
