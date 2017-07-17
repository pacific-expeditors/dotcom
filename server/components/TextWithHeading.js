/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { get } from 'lodash';
import TextWithHeading from 'pacific-expeditors-styleguide/TextWithHeading';

class TextWithHeadingComponent extends Component {
  render() {
    const { data } = this.props;
    const textWithHeading = get(data, 'textWithHeading', {});

    return (
      <TextWithHeading content={textWithHeading.content} title={textWithHeading.heading} />
    );
  }
}

export default graphql(gql`
  query TextWithHeading($id: ID!) {
    textWithHeading(id:$id) {
      id
      content
      heading
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(TextWithHeadingComponent);
