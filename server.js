// Express/GraphQL
const express = require('express');
const expressGraphQL = require('express-graphql');

// Middlewares
const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const cfGraphql = require('cf-graphql');

// React
const { createElement } = require('react');
const { renderToStringWithData } = require('react-apollo');

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

  // Authentication middleware for making authenticated requests with JWTs and Auth0.
  app.use(jwt({
    secret: process.env.AUTH0_CLIENT_SECRET,
    audience: process.env.AUTH0_CLIENT_ID,
    credentialsRequired: false
  }));

  // Client-side JS
  app.use('/dist', express.static(`${__dirname}/dist`));

  // Graphiql route
  const ui = cfGraphql.helpers.graphiql({title: 'ToeZin GraphQL Server'});
  app.get('/graphiql', (_, res) => res.set(ui.headers).status(ui.statusCode).end(ui.body));

  // GraphQL endpoint options with contentful integration.
  const opts = {version: true, timeline: true, detailedErrors: false};
  const ext = cfGraphql.helpers.expressGraphqlExtension(client, schema, opts);

  // GraphQL endpoint
  app.use('/graphql', expressGraphQL(ext));

  // Render some React
  app.use('/', renderUi());

  // Start the server
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Running on port ${port}`));
};

// React isomorphic server rendering.
// Used for SEO and improved performance.
const renderUi = () => {
  const app = express();
  app.set('view engine', 'ejs');
  const Root = require('./server/components/Root').default;

  app.all('*', (req, res) => {
    const Component = createElement(Root, {
      slug: req.params[0].substring(1)
    });

    renderToStringWithData(Component)
      .then(body => res.render('template', {
        title: 'Home',
        body
      }))
      .catch(err => res.send(err));
  });

  return app;
};

// Run it!
getSchema(client).then(schema => {
  startServer(client, schema);
}).catch(err => {
  console.error(err);
});
