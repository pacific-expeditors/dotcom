/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import Header from '../components/Header'

type Props = {
  data: any
}

class HeaderContainer extends Component<void, Props, void> {
  props: Props
  state: void

  render() {
    const { data } = this.props
    const header = get(data, 'header', {})

    return (
      <Header
        navLinks={header.navigationLinks}
        siteTitle={header.siteTitle}
        logo={header.logo.url} />
    )
  }
}

type Options = {
  slug?: string
}

export default graphql(gql`
  query Header($id: ID!) {
    header(id:$id) {
      sys {
        id
      }
      siteTitle
      logo {
        title
        description
        url
      }
      navigationLinks {
        sys {
          id
        }
        href
        text
        alignment
        subNavigationLinks {
          ... on NavigationLinks {
            href
            text
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
})(HeaderContainer)
