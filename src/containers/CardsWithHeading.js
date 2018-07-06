/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import CardsWithHeading from '../components/CardsWithHeading'

type Props = {
  data: any
}

class CardsWithHeadingContainer extends Component<void, Props, void> {
  props: Props
  state: void

  constructor(props:Props) {
    super(props)

    props.data.refetch()
  }

  render() {
    const { data } = this.props
    const cardsWithHeading = get(data, 'cardsWithHeading', {})

    return (
      <CardsWithHeading {...cardsWithHeading} />
    )
  }
}

type Options = {
  id?: string
}

export default graphql(gql`
  query CardsWithHeading($id: ID!) {
    cardsWithHeading(id:$id) {
      sys {
        id
      }
      heading
      callToActionLink
      callToActionText
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
  options: ({id}:Options) => {
    return {
      variables: { id }
    }
  }
})(CardsWithHeadingContainer)
