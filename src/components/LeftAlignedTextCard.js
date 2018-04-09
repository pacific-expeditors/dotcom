/* @flow */
import React from 'react'

type LeftCardProps = {
  id: string,
  heading: string,
  content: string,
  background: any,
  image: any,
  opaqueTextBackground: boolean
}

const LeftAlignedTextCard = ({id, heading, content, background, image, opaqueTextBackground}:LeftCardProps) => {
  return (
    <div
      key={id}
      id={id}
      className="left-card-container">
        <div className="swipe invisible"></div>
        {!opaqueTextBackground && background && (
          <div className="left-card-background-images">
            <img
              className="left-card-background-image lazyload"
              data-src={`${background.url}?w=1920`}
              alt={heading} />
          </div>
        )}
        <div className="left-card">
          <div className={`left-card-text-container${!opaqueTextBackground ? " left-card-alt" : ''}`}>
            <h3 className="left-card-heading">
              {heading}
              <div className="left-card-heading"></div>
            </h3>
            <div className="left-card-text">
              {content}
            </div>
          </div>
          <div className="left-card-image-container">
            {opaqueTextBackground && background && (
              <div className="left-card-background-images">
                <img
                  className="left-card-background-image-opaque lazyload"
                  data-src={`${background.url}?w=1920`}
                  alt={heading} />
              </div>
            )}
            {opaqueTextBackground && image && (
              <img
                className="left-card-image lazyload invisible"
                data-src={`${image.url}?w=610`}
                alt={heading} />
            )}
          </div>
        </div>
    </div>
  )
}

export default LeftAlignedTextCard
