/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import CardsWithBackground from '../components/CardsWithBackground'

type Props = {
  data: any
}

class CardsWithBackgroundContainer extends Component<void, Props, void> {
  props: Props
  state: void

  render() {
    const { data } = this.props
    const cardsWithBackground = get(data, 'cardsWithBackground', {})

    return (
      <CardsWithBackground {...cardsWithBackground} />
    )
  }
}

type Options = {
  id?: string
}

export default graphql(gql`
  query CardsWithBackground($id: ID!) {
    cardsWithBackground(id:$id) {
      sys {
        id
      }
      heading
      image {
        url
      }
      cards {
        id
        cards {
          id
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
  options: ({id}:Options) => {
    return {
      variables: { id }
    }
  }
})(CardsWithBackgroundContainer)
