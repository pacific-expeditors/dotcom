/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import SubPageHero from '../components/SubPageHero';

type Props = {
  data: any
};

class SubPageHeroContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  render() {
    const { data } = this.props;
    const subPageHero = get(data, 'subPageHero', {});

    return (
      <SubPageHero {...subPageHero} />
    );
  }
}

export default graphql(gql`
  query SubPageHero($id: ID!) {
    subPageHero(id:$id) {
      id
      heading
      subText
      background {
        url
      }
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id },
      fetchPolicy: 'network-only'
    }
  }
})(SubPageHeroContainer);
