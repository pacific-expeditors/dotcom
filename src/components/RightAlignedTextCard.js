/* @flow */
import React from 'react'
import {markdown} from 'markdown'
import Button from './Button'

type RightCardProps = {
  id: string,
  heading: string,
  content: string,
  background: any,
  image: any,
  backgroundSize: 'cover' | 'contain' | ''
}

const RightAlignedTextCard = ({
  sys,
  heading,
  content,
  background,
  image,
  callToActionLink,
  callToActionText,
  opaqueTextBackground,
  backgroundSize
}:RightCardProps) => {
  return (
    <div 
    key={sys.id} 
    id={`section${sys.id}`}
    className={`right-card-container${opaqueTextBackground ? ' right-card-alt' : ''}`}>
      {opaqueTextBackground && background && <div className="swipe invisible"></div>}
      {!opaqueTextBackground && background && (
        <div className="right-card-background-images fade-in invisible">
          <img
            key={background.url}
            className={`right-card-background-image full-width invisible fade-in lazyload${backgroundSize == 'contain' ? " contain" : ""}${backgroundSize == 'cover' ? " cover" : ""}`}
            data-src={`${background.url}?w=1920`}
            alt={heading} />
          <div className="right-card-background-image-overlay"></div>
        </div>
      )}
      <div className="right-card">
        <div className="right-card-images">
          {background && opaqueTextBackground && (
            <div className="right-card-background-images">
              <img
                key={background.url}
                className="right-card-background-image invisible lazyload"
                data-src={`${background.url}?w=1920`}
                alt={heading} />
              <div className="right-card-background-image-overlay"></div>
            </div>
          )}
          {image && (
            <img
              key={image.url}
              className="right-card-image invisible lazyload"
              data-src={`${image.url}?w=610`}
              alt={heading} />
          )}
        </div>
        <div className="right-card-text-container">
          <h3 className={`right-card-heading${image ? ' right-card-text-padded' : ''}`}>{heading}</h3>
          <div className={`right-card-text${image ? ' right-card-text-padded' : ''}`}>
            <div className="right-card-text-content" dangerouslySetInnerHTML={{__html: markdown.toHTML(content)}}>
            </div>
            {callToActionLink && callToActionText && (
              <Button style={opaqueTextBackground ? 'primary invisible' : 'secondary invisible'} link={callToActionLink}>
                {callToActionText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightAlignedTextCard
