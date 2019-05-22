/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import 'isomorphic-fetch'
import Page from './Page'

type Props = {
    data: any
}

class ArticlePage extends Component<void, Props, State> {
    render() {
        const article = get(this.props.data, 'articles[0]', {})

        return (
            <Page
                article={this.props.article}
                slug={this.props.slug}
                title={article.title}
                metaDescription={article.metaDescription} />
        )
    }
}

export default graphql(gql`
    query Article($article: String!) {
        articles(q:$article) {
            title
            metaDescription
        }
    }
`, {
  options: ({article}:Options) => {
    return {
      variables: {
        article: `fields.id=${article}`
      }
    }
  }
})(ArticlePage)