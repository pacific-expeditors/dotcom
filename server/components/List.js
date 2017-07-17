/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { get } from 'lodash';
// import TextWithHeading from 'pacific-expeditors-styleguide/TextWithHeading';

class ListComponent extends Component {
  render() {
    const { data } = this.props;
    const list = get(data, 'list', {});

    return (
      <div>
      </div>
    );
  }
}

export default graphql(gql`
  query List($id: ID!) {
    list(id:$id) {
      id
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(ListComponent);
