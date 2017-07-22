const cloudflare = require('cloudflare')({
  email: process.env.CF_EMAIL,
  key: process.env.CF_AUTH_KEY
});

const purgeCache = (req, res) => {
  cloudflare
    .zones
    .purgeCache(process.env.CF_ZONE_ID, {"purge_everything": true})
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports = purgeCache;
