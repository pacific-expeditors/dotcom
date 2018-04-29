/* @flow */
import React from 'react'
import {markdown} from 'markdown'

type LeftCardProps = {
  id: string,
  heading: string,
  content: string,
  background: any,
  image: any,
  opaqueTextBackground: boolean
}

const LeftAlignedTextCard = ({sys, heading, content, background, image, opaqueTextBackground}:LeftCardProps) => {
  return (
    <div
      key={sys.id}
      id={`section${sys.id}`}
      className="left-card-container">
        {opaqueTextBackground && background && <div className="swipe invisible"></div>}
        {!opaqueTextBackground && background && (
          <div className="left-card-background-images">
            <img
              key={background.url}
              className="left-card-background-image invisible lazyload"
              data-src={`${background.url}?w=1920`}
              alt={heading} />
            <div className="left-card-background-image-overlay"></div>
          </div>
        )}
        <div className="left-card">
          <div className={`left-card-text-container${!opaqueTextBackground ? ' left-card-alt' : ''}`}>
            <h3 className={`left-card-heading${image ? ' left-card-padded' : ''}`}>
              {heading}
              <div className="left-card-heading"></div>
            </h3>
            <div className={`left-card-text${image ? ' left-card-padded' : ''}`}
              dangerouslySetInnerHTML={{__html: markdown.toHTML(content)}}>
            </div>
          </div>
          <div className={`left-card-image-container${!image ? ' empty' : ''}`}>
            {opaqueTextBackground && background && (
              <div className="left-card-background-images">
                <img
                  key={background.url}
                  className="left-card-background-image-opaque lazyload"
                  data-src={`${background.url}?w=1920`}
                  alt={heading} />
                <div className="left-card-background-image-overlay"></div>
              </div>
            )}
            {image && (
              <img
                key={image.url}
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
