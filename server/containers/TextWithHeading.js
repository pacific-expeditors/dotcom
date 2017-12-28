/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import TextWithHeading from '../components/TextWithHeading';

type Props = {
  data: any,
  refetch: boolean
};

class TextWithHeadingContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

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
})(TextWithHeadingContainer);
