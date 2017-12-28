/* @flow */
import React, { Component } from 'react';
import { Providers, Page } from './';

type Props = {
  slug: string,
  refetch?: boolean
};

class Root extends Component<void, Props, State> {
  props: Props;
  state: void;

  render() {
    return (
      <Providers>
        <Page slug={this.props.slug} refetch={this.props.refetch} />
      </Providers>
    );
  }
}

export default Root;
