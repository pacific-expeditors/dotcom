/* @flow */
import React from 'react';
import Button from './Button';

type RightCardProps = {
  id: string,
  heading: string,
  content: string,
  background: any,
  image: any
};

const RightAlignedTextCard = ({id, heading, content, background, image, callToActionLink, callToActionText, opaqueTextBackground}:RightCardProps) => {
  return (
    <div key={id} id={`${id}`} className={`right-card-container${opaqueTextBackground ? ' right-card-alt' : ''}`}>
      {!opaqueTextBackground && background && (
        <div className="right-card-background-images fade-in-obj">
          <img
            className="right-card-background-image lazyload"
            data-src={`${background.url}?w=1920`}
            alt={heading} />
        </div>
      )}
      <div className="right-card">
        <div className="right-card-images fade-in-obj">
          {background && opaqueTextBackground && (
            <div className="right-card-background-images">
              <img
                className="right-card-background-image lazyload"
                data-src={`${background.url}?w=1920`}
                alt={heading} />
            </div>
          )}
          {image && (
            <img
              className="right-card-image lazyload"
              data-src={`${image.url}?w=610`}
              alt={heading} />
          )}
        </div>
        <div className={`right-card-text-container`}>
          <h3 className="right-card-heading">{heading}</h3>
          <div className="right-card-text">
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
  );
};

export default RightAlignedTextCard;
