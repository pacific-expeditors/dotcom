/* @flow */
import React, { Component } from 'react';
import { renderToStringWithData } from 'react-apollo';
import 'isomorphic-fetch';

import { Providers, Page } from './';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

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
