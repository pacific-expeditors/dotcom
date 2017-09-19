/* @flow */
import React from 'react';
import Button from './Button';

type ColumnProps = {
  link?: string,
  linkText?: string,
  heading: string,
  content: string,
  image: string,
  srcset: [string]
};

type GridProps = {
  columns: [ColumnProps]
};

const Grid = ({id, heading, content, subText, link, linkText, image, srcset, align = 'normal'}:GridProps) => {
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
        {link && <Button link={link} style="primary">{linkText}</Button>}
      </div>
      <div className="col col-image-container">
        <img className="col-image" src={image} srcset={srcset} alt={heading} />
      </div>
    </div>
  );
};

export default Grid;
