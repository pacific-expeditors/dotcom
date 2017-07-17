/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { get } from 'lodash';
import IntroVideo from 'pacific-expeditors-styleguide/IntroVideo';

class IntroVideoComponent extends Component {
  render() {
    const { data } = this.props;
    const introductionVideo = get(data, 'introductionVideo', {});

    return (
      <IntroVideo
        src={introductionVideo.src} />
    );
  }
}

export default graphql(gql`
  query Header($id: ID!) {
    introductionVideo(id:$id) {
      id
      src
      title
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(IntroVideoComponent);
