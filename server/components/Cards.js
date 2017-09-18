/* @flow */
import React from 'react';

type CardProps = {
  link?: string,
  linkText?: string,
  heading: string,
  subHeading?: string,
  content: string,
  image: string,
  srcset: [string],
  overlayImage: boolean
};

type CardsProps = {
  cards: [CardProps]
};

const Cards = ({cards = []}:CardsProps) => {
  return (
    <div className="cards">
      {cards.map(({id, heading, subHeading, image, srcset}) => (
        <div key={id} className="card">
          <div className="card-image-container">
            <img className="card-image" src={image} srcset={srcset} alt={heading} />
            {overlayImage && (
              <div className="card-overlay">
                <h3 className="card-heading">{heading}</h3>
                <h4 className="card-sub-heading">{subHeading}</h4>
              </div>
            )}
          </div>
          <div className="card-content">
            {!overlayImage && (
              <h3 className="card-heading">{heading}</h3>
            )}
            <div className="card-text">
              {content}
            </div>
            {link && <Button style="primary">{linkText}</Button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
