'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _server = require('react-dom/server');

var _Offline = require('../components/Offline');

var _Offline2 = _interopRequireDefault(_Offline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var offline = function offline(req) {
  var app = (0, _express2.default)();
  app.use('/static', _express2.default.static('server/assets'));

  app.get('/', function (req, res) {
    var Component = (0, _react.createElement)(_Offline2.default);

    var body = (0, _server.renderToStaticMarkup)(Component);
    res.send('<!doctype>' + body);
  });

  return app;
};

module.exports = offline;