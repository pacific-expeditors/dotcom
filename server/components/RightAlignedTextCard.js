/* @flow */
import React from 'react';

type RightCardProps = {
  id: string,
  heading: string,
  content: string,
  background: any,
  image: any,
  srcset?: [any]
};

const RightAlignedTextCard = ({id, heading, content, background, image, srcset = []}:RightCardProps) => {
  return (
    <div key={id} id={`${id}`} className={`right-card-container${image ? ' right-card-alt' : ''}`}>
      {background && !image && (
        <div className="right-card-background-images fade-in-obj">
          <img
            className="right-card-background-image lazyload"
            data-src={`${background.url}?w=1920`}
            data-srcset={srcset}
            alt={heading} />
        </div>
      )}
      <div className="right-card">
        <div className="right-card-images fade-in-obj">
          {background && image && (
            <div className="right-card-background-images">
              <img
                className="right-card-background-image lazyload"
                data-src={`${background.url}?w=1920`}
                data-srcset={srcset}
                alt={heading} />
            </div>
          )}
          {image && (
            <img
              className="right-card-image lazyload"
              data-src={`${image.url}?w=610`}
              data-srcset={srcset}
              alt={heading} />
          )}
        </div>
        <div className="right-card-text">
          <h3 className="right-card-heading">{heading}</h3>
          <div className="right-card-text">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightAlignedTextCard;
