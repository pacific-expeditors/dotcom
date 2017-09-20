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

const CardsWithHeading = ({heading, cards = []}:CardsProps) => {
  const headings = heading.split('/');

  return (
    <div className="cards-with-header">
      <h3 className="cards-header">
        <span>{headings[0]}</span>
        <img src="//images.contentful.com/i9tcznuksxng/rOLTliS0gggQcE4miIICo/b3213715b01e719d4d8be05afdb54e57/c-d-arrows.svg" alt="" />
        <span>{headings[1]}</span>
      </h3>
      <Cards cards={cards.cards} />
    </div>
  );
};

export default CardsWithHeading;
