/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import RightAlignedTextCard from '../components/RightAlignedTextCard'

type Props = {
  data: any
}

class RightAlignedTextCardContainer extends Component<void, Props, void> {
  props: Props
  state: void

  render() {
    const { data } = this.props
    const rightAlignedTextCard = get(data, 'rightAlignedTextCard', {})

    return (
      <RightAlignedTextCard {...rightAlignedTextCard} />
    )
  }
}

type Options = {
  slug?: string
}

export default graphql(gql`
  query RightAlignedTextCard($id: ID!) {
    rightAlignedTextCard(id:$id) {
      sys {
        id
      }
      heading
      content
      opaqueTextBackground
      callToActionText
      callToActionLink
      backgroundSize
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
})(RightAlignedTextCardContainer)
