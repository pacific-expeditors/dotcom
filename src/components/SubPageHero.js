/* @flow */
import React from 'react'

type SubPageHeroProps = {
  heading: string,
  subText: string
}

const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden'
  },
  subPageHero: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subPageHeading: {
    fontSize: '32px',
    margin: 0,
    fontWeight: 500,
    letterSpacing: '1.5px',
    lineHeight: 1,
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center'
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
    fontWeight: 300
  }
}

const SubPageHero = ({heading, subText, background}:SubPageHeroProps) => {
  return (
    <div className="subpage-hero-container" style={{
        ...styles.container,
        background: `url(${background.url})`
    }}>
      <div className="subpage-hero" style={styles.subPageHero}>
        <h1 className="subpage-hero-heading" style={styles.subPageHeading}>
          {heading}
        </h1>
        <div style={styles.hr} className="subpage-hero-hr"></div>
        <div style={styles.subHeading} className="subpage-hero-subheading">{subText}</div>
      </div>
    </div>
  )
}

export default SubPageHero
