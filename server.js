const path = process.env.NODE_ENV === 'development' ? 'server' : 'dist';
const cfGraphql = require('cf-graphql');
const getSchema = require(`./${path}/schema`);
const startServer = require(`./${path}/utils/start-server`);

require('dotenv').load();

const client = cfGraphql.createClient({
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  cdaToken: process.env.CONTENTFUL_CDA_TOKEN,
  cmaToken: process.env.CONTENTFUL_CMA_TOKEN
});

getSchema(client).then(schema => {
  startServer(client, schema);
}).catch(err => {
  console.error(err);
});
