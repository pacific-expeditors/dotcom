/* @flow */
import React from 'react'
import Button from './Button'

type RightCardProps = {
  id: string,
  heading: string,
  content: string,
  background: any,
  image: any
}

const RightAlignedTextCard = ({id, heading, content, background, image, callToActionLink, callToActionText, opaqueTextBackground}:RightCardProps) => {
  return (
    <div key={id} id={id} className={`right-card-container${opaqueTextBackground ? ' right-card-alt' : ''}`}>
      {!opaqueTextBackground && background && (
        <div className="right-card-background-images">
          <img
            className="right-card-background-image invisible lazyload"
            data-src={`${background.url}?w=1920`}
            alt={heading} />
        </div>
      )}
      <div className="right-card">
        <div className="right-card-images">
          {background && opaqueTextBackground && (
            <div className="right-card-background-images">
              <img
                className="right-card-background-image invisible lazyload"
                data-src={`${background.url}?w=1920`}
                alt={heading} />
            </div>
          )}
          {image && (
            <img
              className="right-card-image invisible lazyload"
              data-src={`${image.url}?w=610`}
              alt={heading} />
          )}
        </div>
        <div className="right-card-text-container">
          <div className="right-card-text-inner">
            <h3 className="right-card-heading invisible">{heading}</h3>
            <div className="right-card-text invisible">
              <div className="right-card-text-content">
                {content}
              </div>
              {callToActionLink && callToActionText && (
                <Button style={opaqueTextBackground ? 'primary' : 'secondary'} link={callToActionLink}>
                  {callToActionText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightAlignedTextCard
