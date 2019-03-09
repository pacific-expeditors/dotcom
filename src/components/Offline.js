/* @flow */
import React from 'react'
import uuid from 'uuid/v4'

const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    height: '70vh'
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
  },
  heading: {
    textAlign: 'center',
    fontFamily: 'Europa',
    fontSize: 36,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    color: '#4F4F4F',
    margin: '12px 0'
  },
  content: {
    textAlign: 'center',
    fontFamily: 'Europa',
    fontSize: 16,
    fontWeight: 300,
    color: '#A6A6A6',
    padding: '8px 0'
  }
}

const typekit = 'try{Typekit.load({ async: true })}catch(e){}'
const src = '//videos.contentful.com/i9tcznuksxng/1xGfj5KOqsugAYikaQQgqO/2ec3c5f4fbadfb9e5cf420523a82e4b0/out.mp4'
const sources = ['video/mp4']
const logo = 'https://images.contentful.com/i9tcznuksxng/2gxfR9rxvWMmeIQimesekM/6e61a05dd10bd098cc6754141562058f/PacExLogoWhite.svg'

const Offline = () => {
  return (
    <html lang="en">
      <head>
        <title>Website Offline | Pacific Expeditors</title>
        <meta charset="utf-8" />
        <meta http-equiv="robots" content="noindex,nofollow" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
        <link rel="stylesheet" type="text/css" href="/static/components.min.css" />

        <link rel="shortcut icon" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=16" />

        <script src="https://use.typekit.net/rnz3htj.js"></script>
        <script>{typekit}</script>
      </head>
      <body>
        <div className="video-container" style={styles.container}>
          <video
            className="video"
            style={styles.video}
            poster={styles.poster}
            autoPlay={true}
            loop={false}
            src={src}>
            {sources.map(({type, src}) => <source key={uuid()} style={styles.source} type={type} src={src} />)}
          </video>
          <div className="video-overlay" style={styles.overlay} />
          <img className="video-logo" style={styles.logo} src={logo} alt="Pacific Expeditors" />
        </div>
        <div className="offline">
          <h2 style={styles.heading}>Website Offline</h2>
          <p style={styles.content}>Thanks for visiting Pacific Expeditors. Unfortunately, website is currently offline. Please come back soon.</p>
        </div>
      </body>
    </html>
  )
}

export default Offline
