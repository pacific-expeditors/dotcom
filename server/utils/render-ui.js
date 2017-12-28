/* @flow */
import express from 'express';
import { createElement } from 'react';
import Root from '../containers/Root';
import { renderToStringWithData } from 'react-apollo';

const renderUi = (req) => {
  const app = express();
  app.use('/static', express.static('server/assets'));

  app.get('/:slug?', (req, res) => {
    const slug = req.params.slug ? req.params.slug : 'home';
    const refetch = !!req.query.refetch;
    const Component = createElement(Root, { slug, refetch });

    renderToStringWithData(Component)
      .then((body:string) => res.send(`<!doctype>${body}`))
      .catch((err:string) => res.send(err));
  });

  return app;
};

module.exports = renderUi;
