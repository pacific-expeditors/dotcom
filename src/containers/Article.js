/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import Article from '../components/Article'

type Props = {
  data: any
}

class ArticleContainer extends Component<void, Props, void> {
  props: Props
  state: void

  render() {
    const { data } = this.props
    const article = get(data, 'articles[0]', {})

    return (
      <Article {...article} />
    )
  }
}

type Options = {
  article?: string
}

export default graphql(gql`
  query Article($article: String!) {
    articles(q:$article) {
      sys {
        id
      }
      title
      description
      attachments {
        url
      }
    }
  }
`, {
  options: ({article}:Options) => {
    return {
      variables: { article: `fields.id=${article}` }
    }
  }
})(ArticleContainer)
