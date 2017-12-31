/* @flow */
import React from 'react';

type LeftCardProps = {
  id: string,
  heading: string,
  content: string,
  background: any,
  image: any,
  srcset?: [any]
};

const LeftAlignedTextCard = ({id, heading, content, background, image, srcset = []}:LeftCardProps) => {
  return (
    <div
      key={id}
      id={`${id}`}
      style={{backgroundImage: `url(${background.url}?w=610)`}}
      className="left-card-container">
        <div className="left-card">
          <div className="left-card-text-container">
            <h3 className="left-card-heading">{heading}</h3>
            <div className="left-card-text">
              {content}
            </div>
          </div>
          {image && (
            <div className="left-card-image-container fade-in-obj">
              <img
                className="left-card-image lazyload"
                data-src={`${image.url}?w=610`}
                data-srcset={srcset}
                alt={heading} />
            </div>
          )}
        </div>
    </div>
  );
};

export default LeftAlignedTextCard;
