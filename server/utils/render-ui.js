/* @flow */
import express from 'express';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import Root from '../containers/Root';

const renderUi = (req) => {
  const app = express();

  app.all('*', (req, res) => {
    const slug = Object.values(req.params).length ? req.params[0].substring(1) : 'home';
    const Component = createElement(Root, { slug });

    renderToString(Component)
      .then(body => res.send(`<!doctype>${body}`))
      .catch(err => res.send(err));
  });

  return app;
};

module.exports = renderUi;
