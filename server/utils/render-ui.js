/* @flow */
import express from 'express';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { ServerFetcher } from './fetcher';
import Root from '../components/Root';

const renderUi = () => {
  const app = express();
  const slug = req.params.length ? req.params[0].substring(1) : 'home';

  app.all('*', (req, res) => {
    const Component = createElement(Root, { slug });

    renderToString(Component)
      .then(body => res.send(`<!doctype>${body}`))
      .catch(err => res.send(err));
  });

  return app;
};

module.exports = renderUi;
