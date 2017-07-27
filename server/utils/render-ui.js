/* @flow */
import express from 'express';
import { createElement } from 'react';
import Root from '../containers/Root';
import { renderToStringWithData } from 'react-apollo';

const renderUi = (req:any) => {
  const app = express();
  app.use('/static', express.static('server/assets'));

  app.get('/:slug?', (req:any, res:any) => {
    const slug = req.params.slug ? req.params.slug : 'home';
    const refetch = !!req.query.refetch;
    const Component = createElement(Root, { slug, refetch });

    renderToStringWithData(Component)
      .then(body => res.send(`<!doctype>${body}`))
      .catch(err => res.send(err));
  });

  return app;
};

module.exports = renderUi;
