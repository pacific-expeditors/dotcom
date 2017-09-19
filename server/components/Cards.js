/* @flow */
import React from 'react';
import Button from './Button';

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
      {cards.map((card) => (
        <div key={card.id} className="card">
          <div className="card-image-container">
            <img className="card-image" src={card.image} srcset={card.srcset} alt={card.heading} />
            {card.overlayImage && (
              <div className="card-overlay">
                <h3 className="card-heading">{card.heading}</h3>
                <h4 className="card-sub-heading">{card.subHeading}</h4>
              </div>
            )}
          </div>
          <div className="card-content">
            {!card.overlayImage && (
              <h3 className="card-heading">{card.heading}</h3>
            )}
            <div className="card-text">
              {card.content}
            </div>
            {card.link && <Button link={card.link} style="primary">{card.cta}</Button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
