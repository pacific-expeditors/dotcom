/* @flow */
import express from 'express'
import { createElement } from 'react'
import Root from '../containers/Root'
import { renderToStringWithData } from 'react-apollo'

export default (req:any) => {
  const app = express()
  app.use('/static', express.static('server/assets'))

  app.get('/:slug?/:article?', (req, res) => {
    const slug = req.params.slug ? req.params.slug : 'home'
    const article = req.params.article ? req.params.article : ''
    const Component = createElement(Root, { slug, article })

    renderToStringWithData(Component)
      .then((body:string) => res.send(`<!doctype>${body}`))
      .catch((err:string) => res.send(err))
  })

  return app
}
