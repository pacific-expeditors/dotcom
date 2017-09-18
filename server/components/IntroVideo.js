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
  }
};

const IntroVideo = ({
  autoplay = true,
  loop = true,
  src,
  sources = [],
  heading
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
        {sources.map(({type, src}) => <source style={styles.source} type={type} src={src} />)}
      </video>
      <div className="video-overlay" style={styles.overlay} />
      <div className="video-cta">
        <h1 className="video-cta-heading">{}</h1>
      </div>
    </div>
  );
};

export default IntroVideo;
