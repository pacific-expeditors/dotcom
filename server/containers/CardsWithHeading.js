/* @flow */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import get from 'lodash.get';
import CardsWithHeading from '../components/CardsWithHeading';

class CardsWithHeadingContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

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
      variables: { id }
    }
  }
})(CardsWithHeadingContainer);
