"use strict";

var cloudflare = require('cloudflare')({
  email: process.env.CF_EMAIL,
  key: process.env.CF_AUTH_KEY
});

var purgeCache = function purgeCache(req, res) {
  cloudflare.zones.purgeCache(process.env.CF_ZONE_ID, { "purge_everything": true }).then(function (response) {
    res.send(response);
  }).catch(function (err) {
    res.send(err);
  });
};

module.exports = purgeCache;