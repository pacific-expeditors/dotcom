/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { get } from 'lodash';
import Footer from '../components/Footer';

class FooterContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const footer = get(data, 'footer', {});

    return (
      <Footer logo={footer.logo} title={footer.title} copyright={footer.copyright} />
    );
  }
}

export default graphql(gql`
  query Footer($id: ID!) {
    footer(id:$id) {
      id
      logo
      title
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
