/* @flow */
import React, { Component, cloneElement } from 'react';
import type { Children } from 'react';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import 'isomorphic-fetch';

require('dotenv').config();

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_ENDPOINT
});

const client = new ApolloClient({
  ssrMode: true,
  dataIdFromObject: o => o.id,
  networkInterface
});

type Props = {
  children: Children
};

export default class extends Component {
  props: Props;

  render() {
    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    );
  }
}
