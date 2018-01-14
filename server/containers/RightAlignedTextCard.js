/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import RightAlignedTextCard from '../components/RightAlignedTextCard';

type Props = {
  data: any
};

class RightAlignedTextCardContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  render() {
    const { data } = this.props;
    const rightAlignedTextCard = get(data, 'rightAlignedTextCard', {});

    return (
      <RightAlignedTextCard {...rightAlignedTextCard} />
    );
  }
}

export default graphql(gql`
  query RightAlignedTextCard($id: ID!) {
    rightAlignedTextCard(id:$id) {
      id
      heading
      content
      opaqueTextBackground
      background {
        url
      }
      image {
        url
      }
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id },
      fetchPolicy: 'network-only'
    }
  }
})(RightAlignedTextCardContainer);
