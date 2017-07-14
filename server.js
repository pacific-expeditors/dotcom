// Express/GraphQL
const express = require('express');
const expressGraphQL = require('express-graphql');

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
