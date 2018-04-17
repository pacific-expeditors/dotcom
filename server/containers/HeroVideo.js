/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import IntroVideo from '../components/IntroVideo';

type Props = {
  data: any,
  refetch: boolean
};

class HeroVideoContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  render() {
    const { data } = this.props;
    const heroVideo = get(data, 'heroVideo', {sources:[]});
    const sources = heroVideo.sources.map(source => ({
      type: "video/mp4",
      src: source.url
    }));

    return (
      <IntroVideo
        autoPlay
        loop
        heading={introductionVideo.heading}
        subHeading={introductionVideo.subHeading}
        cta={introductionVideo.cta}
        link={introductionVideo.link}
        sources={sources} />
    );
  }
}

export default graphql(gql`
  query HeroVideo($id: ID!) {
    heroVideo(id:$id) {
      id
      heading
      subHeading
      cta
      link
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
})(HeroVideoContainer);
