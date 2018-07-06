/* @flow */
import React from 'react'
import Button from './Button'

type CenteredTextWithBackgroundProps = {
  content: string,
  background: any
}

const CenteredTextWithBackground = ({
  id, 
  heading, 
  content, 
  background, 
  callToActionText,
  callToActionLink,
  backgroundColor
}:CenteredTextWithBackgroundProps) => {
  const backgroundColors = {
    gray: ' text-with-background-gray',
    blue: ' text-with-background-blue'
  }

  return (
    <div
      key={id}
      id={id}
      className={`text-with-background-container${backgroundColor ? backgroundColors[backgroundColor] : ''}`}>
      {background && (
        <div className="text-with-background-images">
          <img
            key={background.url}
            className="text-with-background-image lazyload invisible"
            data-src={`${background.url}?w=1920`} />
          <div className="text-with-background-image-overlay"></div>
        </div>
      )}
      <div className="text-with-background">
        {heading && (
          <h2 className="text-with-background-heading">
            {heading}
          </h2>
        )}
        <p className="text-with-background-text">
          {content}
        </p>
        <div className="text-with-background-cta">
          {callToActionLink && callToActionText && (
            <Button style="secondary" link={callToActionLink}>
              {callToActionText}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CenteredTextWithBackground
