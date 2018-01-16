'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _Root = require('../containers/Root');

var _Root2 = _interopRequireDefault(_Root);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderUi = function renderUi(req) {
  var app = (0, _express2.default)();
  app.use('/static', _express2.default.static('server/assets'));

  app.get('/:slug?/:article?', function (req, res) {
    var slug = req.params.slug ? req.params.slug : 'home';
    var article = req.params.article ? req.params.article : '';
    var Component = (0, _react.createElement)(_Root2.default, { slug: slug, article: article });

    (0, _reactApollo.renderToStringWithData)(Component).then(function (body) {
      return res.send('<!doctype>' + body);
    }).catch(function (err) {
      return res.send(err);
    });
  });

  return app;
};

module.exports = renderUi;