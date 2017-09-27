/* @flow */
import React from 'react';
import Button from './Button';

type ColumnProps = {
  link?: string,
  cta?: string,
  heading: string,
  content: string,
  image: string,
  srcset: [string]
};

type GridProps = {
  columns: [ColumnProps]
};

const Grid = ({id, heading, content, subText, link, cta, image, srcset, align = 'normal'}:GridProps) => {
  return (
    <div className={`grid ${align}`}>
      <div className="col col-content">
        <h3 className="col-heading">{heading}</h3>
        <div className="col-text">
          {content}
        </div>
        <p className="col-sub-text">
          {subText}
        </p>
        {link && <Button link={link} style="primary">{cta}</Button>}
      </div>
      <div className="col col-image-container">
        <img
          className="col-image lazyload"
          data-src={`${image.url}?w=610`}
          data-srcset={srcset}
          alt={heading} />
      </div>
    </div>
  );
};

export default Grid;
