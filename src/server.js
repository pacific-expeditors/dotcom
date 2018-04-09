/* @flow */
import express from 'express'
import expressGraphQL from 'express-graphql'
import bodyParser from 'body-parser'
import cors from 'cors'
import cfGraphql from 'cf-graphql'
import getSchema from './schema'
import renderUi from './utils/render-ui'

require('dotenv').load()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/static', express.static('dist'))

if (process.env.OFFLINE === 'false') {
  const client = cfGraphql.createClient({
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    cdaToken: process.env.CONTENTFUL_CDA_TOKEN,
    cmaToken: process.env.CONTENTFUL_CMA_TOKEN
  })

  getSchema(client).then((schema) => {
    const ui = cfGraphql.helpers.graphiql({title: 'GraphQL Server'})
    app.get('/graphiql', (_, res) => res.set(ui.headers).status(ui.statusCode).end(ui.body))
    const opts = {version: true, timeline: true, detailedErrors: false}
    const ext = cfGraphql.helpers.expressGraphqlExtension(client, schema, opts)
    app.use('/graphql', expressGraphQL(ext))
    app.use('/', renderUi())
  })
  .catch((err:String) => {
    console.log(err)
  })
}

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Running on port ${port}`))
