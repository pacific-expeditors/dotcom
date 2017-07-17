// Express/GraphQL
const express = require('express');
const cors = require('cors');
const expressGraphQL = require('express-graphql');
const cloudflare = require('cloudflare')({
  email: process.env.CF_EMAIL,
  key: process.env.CF_AUTH_KEY
});

// React
const { createElement } = require('react');
const { renderToStringWithData } = require('react-apollo');

// Middlewares
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

// React isomorphic server rendering.
// Used for SEO and improved performance.
const renderUi = () => {
  const app = express();
  app.set('view engine', 'ejs');
  const Root = require('./server/dist/Root').default;

  app.all('*', (req, res) => {
    const Component = createElement(Root, {
      slug: req.params[0].substring(1)
    });

    renderToStringWithData(Component)
      .then(body => res.render('template', {
        title: 'Pacific Expeditors',
        body
      }))
      .catch(err => res.send(err));
  });

  return app;
};

// Starts up express and configures the GraphQL endpoint.
const startServer = (client, schema) => {
  const app = express();

  // Enable CORS
  app.use(cors());

  // Graphiql route
  const ui = cfGraphql.helpers.graphiql({title: 'GraphQL Server'});
  app.get('/graphiql', (_, res) => res.set(ui.headers).status(ui.statusCode).end(ui.body));

  // GraphQL endpoint options with contentful integration.
  const opts = {version: true, timeline: true, detailedErrors: false};
  const ext = cfGraphql.helpers.expressGraphqlExtension(client, schema, opts);

  // GraphQL endpoint
  app.use('/graphql', expressGraphQL(ext));

  // Render some React
  app.use('/', renderUi());

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
