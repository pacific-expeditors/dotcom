/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import Header from '../components/Header';

type Props = {
  data: any,
  refetch: boolean
};

class HeaderContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

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
