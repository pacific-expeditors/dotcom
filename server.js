// Express/GraphQL
const express = require('express');
const expressGraphQL = require('express-graphql');
const cloudflare = require('cloudflare')({
  email: process.env.CF_EMAIL,
  key: process.env.CF_AUTH_KEY
});

// Middlewares
const bodyParser = require('body-parser');
const cfGraphql = require('cf-graphql');

// GraphQL Schema
const getSchema = require('./server/schema');

// Global variables
require('dotenv').load();

// Create the GraphQL contentful client.
const client = cfGraphql.createClient({
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  cdaToken: process.env.CONTENTFUL_CDA_TOKEN,
  cmaToken: process.env.CONTENTFUL_CMA_TOKEN
});

// Purges Cloudflare Cache
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

// Starts up express and configures the GraphQL endpoint.
const startServer = (client, schema) => {
  const app = express();

  // Graphiql route
  const ui = cfGraphql.helpers.graphiql({title: 'GraphQL Server'});
  app.get('/graphiql', (_, res) => res.set(ui.headers).status(ui.statusCode).end(ui.body));

  // GraphQL endpoint options with contentful integration.
  const opts = {version: true, timeline: true, detailedErrors: false};
  const ext = cfGraphql.helpers.expressGraphqlExtension(client, schema, opts);

  // GraphQL endpoint
  app.use('/graphql', expressGraphQL(ext));

  // Manually purge cache
  app.post('/purge_cache', purgeCache);

  // Start the server
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Running on port ${port}`));
};

// Run it!
getSchema(client).then(schema => {
  startServer(client, schema);
}).catch(err => {
  console.error(err);
});
