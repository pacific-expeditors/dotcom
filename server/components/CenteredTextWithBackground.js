/* @flow */
import React from 'react';

type CenteredTextWithBackgroundProps = {
  content: string,
  background: any
};

const CenteredTextWithBackground = ({id, content, background}:CenteredTextWithBackgroundProps) => {
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
        <p className="text-with-background-text">
          {content}
        </p>
      </div>
    </div>
  );
};

export default CenteredTextWithBackground;
