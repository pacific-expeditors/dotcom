/* @flow */
import React, { Component } from 'react';
import { Providers, Page } from './';

class Root extends Component {
  render() {
    return (
      <Providers>
        <Page slug={this.props.slug} />
      </Providers>
    );
  }
}

export default Root;
