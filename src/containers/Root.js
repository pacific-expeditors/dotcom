/* @flow */
import React, { Component } from 'react'
import Page from './Page'
import ArticlePage from './ArticlePage'
import Providers from './Providers'

type Props = {
  slug: string
}

class Root extends Component<void, Props, State> {
  props: Props
  state: void

  render() {
    return (
      <Providers>
        {!this.props.article ? (
          <Page slug={this.props.slug} article={this.props.article} />
        ) : (
          <ArticlePage slug={this.props.slug} article={this.props.article} />
        )}
      </Providers>
    )
  }
}

export default Root
