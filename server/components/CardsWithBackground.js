/* @flow */
import React from 'react';
import Cards from './Cards';

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
  heading: string,
  background: string,
  cards: [CardProps]
};

const CardsWithBackground = ({heading, image, cards = []}:CardsProps) => {
  return (
    <div className="cards-with-bg">
      <div className="cards-with-bg-container" style={{background: `url(${image.url}?h=1920)`}}>
      </div>
      <h3 className="cards-with-bg-heading">{heading}</h3>
      <Cards cards={cards.cards} />
    </div>
  );
};

export default CardsWithBackground;
