/* @flow */
import React from 'react'
import uuid from 'uuid/v4'
import Button from './Button'

type Source = {
  type: string,
  src: string
}

type HeroVideoProps = {
  autoplay?: boolean,
  loop?: boolean,
  src: string,
  sources: [Source]
}

const HeroVideo = ({
  id,
  src,
  sources = [],
  heading,
  subHeading,
  cta,
  link
}:HeroVideoProps) => {
  return (
    <div id={`section${id}`} className="video-container">
      <video
        className="video"
        autoPlay
        muted
        loop
        src={src}>
        {sources.map(({type = "video/mp4", src}) => <source key={uuid()} type={type} src={src} />)}
      </video>
      <div className="video-overlay">
        <div className="video-overlay-container">
          <div className="video-cta">
            <h1 className="video-cta-heading">{heading}</h1>
            <div className="video-hr"></div>
            <div className="video-cta-subheading">{subHeading}</div>
            {cta && link && <Button link={link} style="secondary">{cta}</Button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroVideo
