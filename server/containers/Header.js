/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import get from 'lodash.get';
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
      <Header siteTitle={header.siteTitle} logo={header.logo.url} />
    );
  }
}

export default graphql(gql`
  query Header($id: ID!) {
    header(id:$id) {
      id
      siteTitle
      logo {
        title
        description
        url
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
