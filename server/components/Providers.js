/* @flow */
import React, { Component } from 'react';

// Material UI theme customization dependencies
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { red100, red500, red700 } from 'material-ui/styles/colors';

require('dotenv').config();

// Material UI theme settings
const muiTheme = getMuiTheme({
  userAgent: 'all',
  palette: {
    primary1Color: red500,
    primary2Color: red700,
    primary3Color: red100,
    textColor: '#607d8b'
  }
});

// Apollo client provider and client.
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

// Configure the network setup so we can pass in
// a JWT authentication header.
const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_ENDPOINT
});

// Apollo client with instructions to identify records by the id attribute.
// Every record should have an id attribute.
// Configure out network interface.
const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface
});

export default class extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <ApolloProvider client={client}>
          {this.props.children}
        </ApolloProvider>
      </MuiThemeProvider>
    );
  }
}
