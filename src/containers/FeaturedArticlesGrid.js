/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import FeaturedArticlesGrid from '../components/FeaturedArticlesGrid'

type Props = {
  data: any
}

class FeaturedArticlesGridContainer extends Component<void, Props, void> {
  props: Props
  state: void

  render() {
    const { data } = this.props
    const articles = get(data, 'articles', [])

    return (
      <FeaturedArticlesGrid articles={articles} />
    )
  }
}

export default graphql(gql`
  query FeaturedArticlesGrid($date: String!) {
    articles(q:$date) {
      id
      title
      excerpt
      attachments {
        url
      }
    }
  }
`, {
  options: () => {
    const date = new Date()
    const ymd = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, 0)}-${date.getDate()}`
    return {
      variables: {
        date: `fields.publishDate[lte]=${ymd}`
      },
      fetchPolicy: 'network-only'
    }
  }
})(FeaturedArticlesGridContainer)
