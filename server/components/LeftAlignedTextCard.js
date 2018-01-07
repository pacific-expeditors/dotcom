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
      id={id}
      className="left-card-container">
        {background && !image && (
          <div className="left-card-background-images fade-in-obj">
            <img
              className="left-card-background-image lazyload"
              data-src={`${background.url}?w=1920`}
              data-srcset={srcset}
              alt={heading} />
          </div>
        )}
        <div className="left-card">
          <div className={`left-card-text-container${!image ? " left-card-alt" : ''}`}>
            <h3 className="left-card-heading">{heading}</h3>
            <div className="left-card-text">
              {content}
            </div>
          </div>
          {image && (
            <div className="left-card-image-container fade-in-obj">
              {background && (
                <div className="left-card-background-images">
                  <img
                    className="left-card-background-image lazyload"
                    data-src={`${background.url}?w=1920`}
                    data-srcset={srcset}
                    alt={heading} />
                </div>
              )}
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
