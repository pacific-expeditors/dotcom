'use strict';

var Heroku = require('heroku.node');

var client = new Heroku({
  email: process.env.HEROKU_EMAIL,
  api_key: process.env.HEROKU_API_KEY
});

var restart = function restart(req, res) {
  client.app('pacificexpeditors').dynos.restart(function (err, msg) {
    res.send(err || msg);
  });
};

module.exports = restart;