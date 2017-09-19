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

const CardsWithBackground = ({heading, background, cards = []}:CardsProps) => {
  return (
    <div className="cards-with-bg" style={{background: `url(${background}?h=640)`}}>
      <div className="cards-with-bg-container">
        <h3 className="cards-with-bg-heading">{heading}</h3>
      </div>
      <Cards cards={cards} />
    </div>
  );
};

export default CardsWithBackground;
