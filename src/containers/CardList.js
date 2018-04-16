/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import Cards from '../components/Cards'

type Props = {
  data: any
}

class CardListContainer extends Component<void, Props, void> {
  props: Props
  state: void

  render() {
    const { data } = this.props
    const cardList = get(data, 'cardList.cards', {})
    const cards = cardList.map(card => ({
      ...card,
      image: `${card.image.url}?h=512&q=80`
    }))

    return (
      <Cards cards={cards} />
    )
  }
}

type Options = {
  slug?: string
}

export default graphql(gql`
  query CardList($id: ID!) {
    cardList(id:$id) {
      sys {
        id
      }
      cards {
        ... on Card {
          sys {
            id
          }
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
  options: ({id}:Options) => {
    return {
      variables: { id }
    }
  }
})(CardListContainer)
