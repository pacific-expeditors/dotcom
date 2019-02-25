/* @flow */
import React, { Component, cloneElement } from 'react'
import type { Children } from 'react'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import 'isomorphic-fetch'

require('dotenv').config()

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.GRAPHQL_ENDPOINT
  }),
  cache: new InMemoryCache({
    dataIdFromObject: object => object.sys && object.sys.id
  })
})

type Props = {
  children: Children
}

export default class extends Component<void, Props, void> {
  props: Props
  state: void

  constructor(props:Props) {
    super(props)

    if (props.children && props.children.props && props.children.props.slug === 'reset-cache') {
      client.cache.reset()
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        {this.props.children}
      </ApolloProvider>
    )
  }
}
