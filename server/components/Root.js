/* @flow */
import React, { Component } from 'react';

import { Providers, Page } from './';

type Props = {
  slug: string
};

class Root extends Component {
  props: Props;

  render() {
    return (
      <Providers>
        <Page refetch={this.props.refetch} slug={this.props.slug} />
      </Providers>
    );
  }
}

export default Root;
