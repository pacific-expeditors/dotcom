/* @flow */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { get } from 'lodash';
import Cards from '../components/Cards';

class CardListContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const cardList = get(data, 'cardList.cards', {});
    const cards = cardList.map(card => ({
      ...card,
      image: `${card.image.url}?h=512&q=80`
    }));

    return (
      <Cards cards={cards} />
    );
  }
}

export default graphql(gql`
  query CardList($id: ID!) {
    cardList(id:$id) {
      id
      cards {
        ... on Card {
          id
          heading
          link
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
})(CardListContainer);
