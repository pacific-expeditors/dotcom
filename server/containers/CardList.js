/* @flow */
import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { get } from 'lodash';
import Cards from '../Cards';

class CardsList extends Component {
  render() {
    const { data } = this.props;
    const cardList = get(data, 'cardList.cards', {});
    const cards = cardList.map(card => ({
      ...card,
      image: `${card.image.url}?w=1024&h=768&q=80`
    }));

    return (
      <Cards cards={cards} />
    );
  }
}

export default createFragmentContainer(CardList, gql`
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
});
