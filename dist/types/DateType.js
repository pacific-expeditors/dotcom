'use strict';

var _graphqlTypeFactory = require('graphql-type-factory');

module.exports = (0, _graphqlTypeFactory.GraphQLStringFactory)({
  name: 'Date',
  fn: function fn(date) {
    return new Date(date) == 'Invalid Date';
  }
});