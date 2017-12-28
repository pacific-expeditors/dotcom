/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import Footer from '../components/Footer';

type Props = {
  data: any,
  refetch: boolean
};

class FooterContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const footer = get(data, 'footer', {});

    return (
      <Footer logo={footer.logo} title={footer.copyright} copyright={footer.copyright} />
    );
  }
}

export default graphql(gql`
  query Footer($id: ID!) {
    footer(id:$id) {
      id
      copyright
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(FooterContainer);
