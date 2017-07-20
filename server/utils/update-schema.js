import fs from 'fs';
import cfGraphql from 'cf-graphql';
import { printSchema } from 'graphql/utilities';
import path from 'path';

import getSchema from '../schema';

require('dotenv').load();

const client = cfGraphql.createClient({
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  cdaToken: process.env.CONTENTFUL_CDA_TOKEN,
  cmaToken: process.env.CONTENTFUL_CMA_TOKEN
});

getSchema(client).then(schema => {
  fs.writeFileSync(
    path.join(__dirname, '../__generated__/schema.graphql'),
    printSchema(schema),
  );
});
