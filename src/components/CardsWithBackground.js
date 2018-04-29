/* @flow */
import React from 'react'
import Cards from './Cards'

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

type ImageProps = {
  url: string
}

type CardsProps = {
  heading: string,
  image: ImageProps,
  background: string,
  cards?: [CardProps]
}

const CardsWithBackground = ({sys, heading, image, cards = []}:CardsProps) => {
  return (
    <div id={`section${sys.id}`} className="cards-with-bg">
      <div id={`trigger${sys.id}`} className="trigger"></div>
      <div className="cards-with-bg-container" style={{background: `url(${image.url}?h=1920)`}}>
      </div>
      <h3 className="cards-with-bg-heading">{heading}</h3>
      <Cards cards={cards.cards} />
    </div>
  )
}

export default CardsWithBackground
