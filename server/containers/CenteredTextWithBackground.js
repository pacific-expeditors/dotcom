/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import CenteredTextWithBackground from '../components/CenteredTextWithBackground';

type Props = {
  data: any
};

class CenteredTextWithBackgroundContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  constructor(props:Props) {
    super(props)

    props.data.refetch()
  }

  render() {
    const { data } = this.props;
    const centeredTextWithBackground = get(data, 'centeredTextWithBackground', {});

    return (
      <CenteredTextWithBackground {...centeredTextWithBackground} />
    );
  }
}

export default graphql(gql`
  query CenteredTextWithBackground($id: ID!) {
    centeredTextWithBackground(id:$id) {
      id
      content
      heading
      callToActionLink
      callToActionText
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
})(CenteredTextWithBackgroundContainer);
