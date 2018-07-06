/* @flow */
import React from 'react'
import Cards from './Cards'
import Button from './Button'

type CardProps = {
  link?: string,
  linkText?: string,
  heading: string,
  subHeading?: string,
  content: string,
  image: string,
  srcset: [string],
  overlayImage: boolean
}

type CardsProps = {
  heading: string,
  cards?: [CardProps]
}

const CardsWithHeading = ({sys, heading, cards = [], callToActionText, callToActionLink}:CardsProps) => {
  return (
    <div id={`section${sys.id}`} className="cards-with-header">
      <h3 className="cards-header">
        {heading}
      </h3>
      <Cards cards={cards.cards} />
      <div className="cards-with-header-cta invisible">
        {callToActionText && callToActionLink && (
          <Button link={callToActionLink}>
            {callToActionText}
          </Button>
        )}
      </div>
    </div>
  )
}

export default CardsWithHeading
