/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import CardsWithHeading from '../components/CardsWithHeading';

type Props = {
  data: any,
  refetch: boolean
};

class CardsWithHeadingContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  render() {
    const { data } = this.props;
    const cardsWithHeading = get(data, 'cardsWithHeading', {});

    return (
      <CardsWithHeading {...cardsWithHeading} />
    );
  }
}

export default graphql(gql`
  query CardsWithHeading($id: ID!) {
    cardsWithHeading(id:$id) {
      id
      heading
      cards {
        id
        cards {
          id
          heading
          link
          cta
          content
          image {
            url
          }
        }
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
})(CardsWithHeadingContainer);
