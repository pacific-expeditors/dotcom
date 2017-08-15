require('dotenv').load();

const path = process.env.NODE_ENV === 'development' ? 'server' : 'dist';
const cfGraphql = require('cf-graphql');
const getSchema = require(`./${path}/schema/index.js`);
const startServer = require(`./${path}/utils/start-server`);

if (process.env.OFFLINE) {
  startServer();
} else {
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
}
