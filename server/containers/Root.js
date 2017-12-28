/* @flow */
import React, { Component } from 'react';
import { Providers, Page } from './';

type Props = {
  slug: string
};

class Root extends Component<void, Props, State> {
  props: Props;
  state: void;

  render() {
    return (
      <Providers>
        <Page slug={this.props.slug} />
      </Providers>
    );
  }
}

export default Root;
