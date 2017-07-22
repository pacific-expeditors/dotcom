/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { get } from 'lodash';
import IntroVideo from '../components/IntroVideo';

class IntroVideoContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }
  
  render() {
    const { data } = this.props;
    const introductionVideo = get(data, 'introductionVideo', {sources:[]});
    const sources = introductionVideo.sources.map(source => ({
      type: "video/mp4",
      src: source.url
    }));

    return (
      <IntroVideo
        autoPlay
        loop
        sources={sources}
        logo={introductionVideo.logo}
        src={introductionVideo.sources[0].url} />
    );
  }
}

export default graphql(gql`
  query IntroVideo($id: ID!) {
    introductionVideo(id:$id) {
      id
      logo
      sources {
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
})(IntroVideoContainer);
