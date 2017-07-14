const { GraphQLStringFactory } = require('graphql-type-factory');

module.exports = GraphQLStringFactory({
  name: 'Date',
  fn: date => new Date(date) == 'Invalid Date'
});
