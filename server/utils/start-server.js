import express from 'express';
import expressGraphQL from 'express-graphql';
import cors from 'cors';
import cfGraphql from 'cf-graphql';
import renderUi from './render-ui';
import purgeCache from './cache';

const startServer = (client, schema) => {
  const app = express();
  app.use('/static', express.static('assets'));

  app.use(cors());

  const ui = cfGraphql.helpers.graphiql({title: 'GraphQL Server'});
  app.get('/graphiql', (_, res) => res.set(ui.headers).status(ui.statusCode).end(ui.body));

  const opts = {version: true, timeline: true, detailedErrors: false};
  const ext = cfGraphql.helpers.expressGraphqlExtension(client, schema, opts);

  app.use('/graphql', expressGraphQL(ext));
  app.use('/', renderUi());

  app.post('/purge_cache', purgeCache);

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Running on port ${port}`));
};

module.exports = startServer;
