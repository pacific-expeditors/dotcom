/* @flow */
import express from 'express'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Offline from '../components/Offline'

export default (req) => {
  const app = express()
  app.use('/static', express.static('server/assets'))

  app.get('/', (req, res) => {
    const Component = createElement(Offline)

    const body = renderToStaticMarkup(Component)
    res.send(`<!doctype>${body}`)
  })

  return app
}
