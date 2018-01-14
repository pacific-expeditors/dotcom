/* @flow */
import React from 'react';
import Button from './Button';

type CenteredTextWithBackgroundProps = {
  content: string,
  background: any
};

const CenteredTextWithBackground = ({id, heading, content, background, callToActionText, callToActionLink}:CenteredTextWithBackgroundProps) => {
  return (
    <div
      key={id}
      id={id}
      className="text-with-background-container">
      {background && (
        <div className="text-with-background-images fade-in-obj">
          <img
            className="text-with-background-image lazyload"
            data-src={`${background.url}?w=1920`} />
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
  );
};

export default CenteredTextWithBackground;
