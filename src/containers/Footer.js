/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import Footer from '../components/Footer'

type Props = {
  data: any
}

class FooterContainer extends Component<void, Props, void> {
  props: Props
  state: void

  render() {
    const { data } = this.props
    const footer = get(data, 'footer', {})

    return (
      <Footer
        socialMediaLinks={footer.socialMediaLinks}
        footerLinks={footer.footerLinks}
        logo={footer.logo}
        title={footer.copyright}
        copyright={footer.copyright} />
    )
  }
}

type Options = {
  slug?: string
}

export default graphql(gql`
  query Footer($id: ID!) {
    footer(id:$id) {
      sys {
        id
      }
      copyright
      logo {
        title
        description
        url
      }
      footerLinks {
        href
        text
      }
      socialMediaLinks {
        id
        title
        link
        icon {
          url
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
})(FooterContainer)
