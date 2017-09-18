/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import get from 'lodash.get';
import TextWithHeading from '../components/TextWithHeading';

class TextWithHeadingContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

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
