/* @flow */
import React, { Component, cloneElement } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import 'isomorphic-fetch';

const fetchQuery = (operation, variables, cacheConfig, uploadables) => {
  return fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(res => res.json());
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);
const handlerProvider = null;

const environment = new Environment({
  handlerProvider,
  network,
  store
});

require('dotenv').config();

// type Props = {
//   children:
// };

export default class extends Component {
  // props: Props;

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query schema($slug: String!) {
            pages(q:$slug) {
              id
              title
              sections {
                sys {
                  id
                }
                __typename
              }
            }
          }
        `}
        variables={{
          slug: `fields.id=${this.props.slug}`
        }}
        render={({error, props}) => {
          if (error) {
            return error;
          } else if (props) {
            return cloneElement(props.children, {data: props.page});
          }

          return <div></div>;
        }}/>
    );
  }
}
