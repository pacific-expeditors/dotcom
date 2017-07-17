/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { get } from 'lodash';
import Header from 'pacific-expeditors-styleguide/Header';

class HeaderComponent extends Component {
  render() {
    const { data } = this.props;
    const header = get(data, 'header', {});

    return (
      <Header logo={header.logo} navLinks={header.navigationLinks} title={header.title} />
    );
  }
}

export default graphql(gql`
  query Header($id: ID!) {
    header(id:$id) {
      id
      logo
      navigationLinks {
        href
        text
        alignment
      }
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(HeaderComponent);
