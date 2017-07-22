'use strict';

var _graphql = require('graphql');

var _Root = require('./Root');

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var schema = function schema(client) {
  return new Promise(function (resolve, reject) {
    (0, _Root2.default)(client).then(function (rootQuery) {
      var schema = new _graphql.GraphQLSchema({
        query: rootQuery
      });

      resolve(schema);
    }).catch(function (err) {
      reject(err);
    });
  });
};

module.exports = schema;