/* @flow */
import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import get from 'lodash.get'
import HeroVideo from '../components/HeroVideo'

type Props = {
  data: any
}

class HeroVideoContainer extends Component<void, Props, void> {
  props: Props
  state: void

  constructor(props:Props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const heroVideo = get(data, 'heroVideo', {sources:[]})
    const sources = heroVideo.sources.map((source) => ({
      type: "video/mp4",
      src: source.url
    }))

    return (
      <HeroVideo
        autoPlay
        loop
        heading={heroVideo.heading}
        subHeading={heroVideo.subHeading}
        cta={heroVideo.cta}
        link={heroVideo.link}
        sources={sources} />
    )
  }
}

type Options = {
  id?: string
}

export default graphql(gql`
  query HeroVideo($id: ID!) {
    heroVideo(id:$id) {
      sys {
        id
      }
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
  options: ({id}:Options) => {
    return {
      variables: { id }
    }
  }
})(HeroVideoContainer)
