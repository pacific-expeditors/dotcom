/* @flow */
import React from 'react';

type CardProps = {
  link: string,
  heading: string,
  image: string
};

type CardsProps = {
  cards: [CardProps]
};

const Cards = ({cards = []}:CardsProps) => {
  return (
    <div className="cards">
      {cards.map(({link, heading, image}) => (
        <a href={link} className="card">
          <img className="card-image" src={image} alt={heading} />
          <div className="card-overlay">
            <h3 className="card-heading">{heading}</h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Cards;
