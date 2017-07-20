'use strict';

var express = require('express');

var _require = require('react'),
    createElement = _require.createElement;

var renderUi = function renderUi() {
  var app = express();
  app.set('view engine', 'ejs');
  var Root = require('../components/Root').default;

  app.all('*', function (req, res) {
    var Component = createElement(Root, {
      slug: req.params.length ? req.params[0].substring(1) : 'home'
    });

    renderToStringWithData(Component).then(function (body) {
      return res.send('<!doctype>' + body);
    }).catch(function (err) {
      return res.send(err);
    });
  });

  return app;
};

module.exports = renderUi;