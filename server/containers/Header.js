/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { get } from 'lodash';
import Header from '../components/Header';

class HeaderContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const header = get(data, 'header', {});

    return (
      <Header
        logo={header.logo}
        mobileLogo={header.mobileLogo}
        navLinks={header.navigationLinks}
        title={header.title} />
    );
  }
}

export default graphql(gql`
  query Header($id: ID!) {
    header(id:$id) {
      id
      logo
      mobileLogo
      navigationLinks {
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
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(HeaderContainer);
