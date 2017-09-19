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
  cards: [CardProps]
};

const CardsWithBackground = ({heading, cards = []}:CardsProps) => {
  return (
    <div className="cards-with-bg">
      <div className="card-with-bg-heading">
        <h3 className="card-with-bg-heading">{heading}</h3>
      </div>
      <Cards cards={cards} />
    </div>
  );
};

export default CardsWithBackground;
