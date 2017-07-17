/* @flow */
import React, { Component } from 'react';
import 'isomorphic-fetch';

// Apollo client provider and client.
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

require('dotenv').config();

// Configure the network setup so we can pass in
// a JWT authentication header.
const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_ENDPOINT,
  cachePolicy: { query: true, data: false }
});

const client = new ApolloClient({
  ssrMode: true,
  dataIdFromObject: o => o.id,
  networkInterface
});

// type Props = {
//   children:
// };

export default class extends Component {
  // props: Props;

  render() {
    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    );
  }
}
