/* @flow */
import React from 'react'
import Button from './Button'

type Source = {
  type: string,
  src: string
}

type IntroVideoProps = {
  autoplay?: boolean,
  loop?: boolean,
  src: string,
  sources: [Source]
}

const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden'
  },
  video: {},
  source: {},
  overlay: {
    background: 'rgba(0, 0, 0, .5)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1
  },
  overlayContainer: {
    width: '1170px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  cta: {
    width: '400px'
  },
  heading: {
    fontSize: '48px',
    margin: 0,
    fontWeight: 600,
    letterSpacing: '1.5px',
    lineHeight: 1,
    color: '#fff',
    textTransform: 'uppercase'
  },
  hr: {
    background: '#fff',
    width: '132px',
    height: '4px',
    margin: '20px 0'
  },
  subHeading: {
    fontSize: '22px',
    margin: 0,
    lineHeight: 1.5,
    color: '#fff',
    margin: '20px 0',
    fontWeight: 'normal'
  }
}

const IntroVideo = ({
  autoplay = true,
  loop = true,
  src,
  sources = [],
  heading,
  subHeading,
  cta,
  link
}:IntroVideoProps) => {
  return (
    <div className="video-container" style={styles.container}>
      <video
        className="video"
        style={styles.video}
        poster={styles.poster}
        autoPlay
        loop={loop}
        src={src}>
        {sources.map(({type = "video/mp4", src}) => <source key={src} style={styles.source} type={type} src={src} />)}
      </video>
      <div className="video-overlay" style={styles.overlay}>
        <div className="video-overlay-container" style={styles.overlayContainer}>
          <div style={styles.cta} className="video-cta">
            <h1 style={styles.heading} className="video-cta-heading">{heading}</h1>
            <div style={styles.hr} className="video-hr"></div>
            <div style={styles.subHeading} className="video-cta-subheading">{subHeading}</div>
            <Button link={link} style="secondary">{cta}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroVideo
