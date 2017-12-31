/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import IntroVideo from '../components/IntroVideo';

type Props = {
  data: any
};

class IntroVideoContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  constructor(props:Props) {
    super(props)

    props.data.refetch()
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
        heading={introductionVideo.heading}
        subHeading={introductionVideo.subHeading}
        cta={introductionVideo.cta}
        link={introductionVideo.link}
        sources={sources} />
    );
  }
}

export default graphql(gql`
  query IntroVideo($id: ID!) {
    introductionVideo(id:$id) {
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
      variables: { id },
      fetchPolicy: 'network-only'
    }
  }
})(IntroVideoContainer);
