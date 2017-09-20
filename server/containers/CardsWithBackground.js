/* @flow */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import get from 'lodash.get';
import CardsWithBackground from '../components/CardsWithBackground';

class CardsWithBackgroundContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const cardsWithBackground = get(data, 'cardsWithBackground', {});

    return (
      <CardsWithBackground {...cardsWithBackground} />
    );
  }
}

export default graphql(gql`
  query CardsWithBackground($id: ID!) {
    cardsWithBackground(id:$id) {
      id
      heading
      image {
        url
      }
      cards {
        id
        cards {
          heading
          subHeading
          link
          overlayImage
          content
          image {
            title
            description
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
})(CardsWithBackgroundContainer);
