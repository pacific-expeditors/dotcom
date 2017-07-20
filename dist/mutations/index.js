'use strict';

var _graphql = require('graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _SignUp = require('./SignUp');

var _SignUp2 = _interopRequireDefault(_SignUp);

var _LogIn = require('./LogIn');

var _LogIn2 = _interopRequireDefault(_LogIn);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphQLObjectType = _graphql2.default.GraphQLObjectType;


var Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp: _SignUp2.default,
    logIn: _LogIn2.default,
    user: _User2.default
  }
});

module.exports = Mutation;