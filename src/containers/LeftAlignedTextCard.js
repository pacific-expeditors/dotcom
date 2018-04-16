/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import LeftAlignedTextCard from '../components/LeftAlignedTextCard'

type Props = {
  data: any
}

class LeftAlignedTextCardContainer extends Component<void, Props, void> {
  props: Props
  state: void

  render() {
    const { data } = this.props
    const leftAlignedTextCard = get(data, 'leftAlignedTextCard', {})

    return (
      <LeftAlignedTextCard {...leftAlignedTextCard} />
    )
  }
}

type Options = {
  slug?: string
}

export default graphql(gql`
  query LeftAlignedTextCard($id: ID!) {
    leftAlignedTextCard(id:$id) {
      sys {
        id
      }
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
  options: ({id}:Options) => {
    return {
      variables: { id }
    }
  }
})(LeftAlignedTextCardContainer)
