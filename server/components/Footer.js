/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { get } from 'lodash';
import Footer from 'pacific-expeditors-styleguide/Footer';

class FooterComponent extends Component {
  render() {
    const { data } = this.props;
    const footer = get(data, 'footer', {});

    return (
      <Footer logo={footer.logo} copyright={footer.copyright} />
    );
  }
}

export default graphql(gql`
  query Footer($id: ID!) {
    footer(id:$id) {
      id
      logo
      copyright
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(FooterComponent);
