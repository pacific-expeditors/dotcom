/* @flow */
import React from 'react';

type Source = {
  type: string,
  src: string
};

type IntroVideoProps = {
  autoplay?: boolean,
  loop?: boolean,
  src: string,
  sources: [Source]
};

const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden'
  },
  video: {
  },
  source: {
  },
  overlay: {
    background: 'rgba(0, 0, 0, .5)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1
  },
  logo: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 3,
    margin: 'auto',
    border: 'none'
  }
};

const IntroVideo = ({ autoplay = true, loop = true, src, sources = [], logo }:IntroVideoProps) => {
  return (
    <div className="video-container" style={styles.container}>
      <video
        className="video"
        style={styles.video}
        poster={styles.poster}
        autoPlay
        loop={loop}
        src={src}>
        {sources.map(({type, src}) => <source style={styles.source} type={type} src={src} />)}
      </video>
      <div className="video-overlay" style={styles.overlay} />
      <img className="video-logo" style={styles.logo} src={logo} alt="" />
    </div>
  );
};

export default IntroVideo;
