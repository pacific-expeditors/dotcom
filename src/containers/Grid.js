/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import Grid from '../components/Grid'

type Props = {
  data: any
}

class GridContainer extends Component<void, Props, void> {
  props: Props
  state: void

  render() {
    const { data } = this.props
    const columns = get(data, 'grid', {})

    return (
      <Grid {...columns} />
    )
  }
}

type Options = {
  slug?: string
}

export default graphql(gql`
  query Grid($id: ID!) {
    grid(id:$id) {
      id
      heading
      subText
      content
      cta
      align
      link
      image {
        url
      }
    }
  }
`, {
  options: ({id}:Options) => {
    return {
      variables: { id },
      fetchPolicy: 'network-only'
    }
  }
})(GridContainer)
