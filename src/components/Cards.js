/* @flow */
import React from 'react'
import {markdown} from 'markdown'
import uuid from 'uuid/v4'
import Button from './Button'

type CardProps = {
  link?: string,
  linkText?: string,
  heading: string,
  subHeading?: string,
  content: string,
  image: any,
  srcset: [string],
  overlayImage: boolean
}

type CardsProps = {
  cards?: [CardProps]
}

const Cards = ({cards = []}:CardsProps) => {
  return (
    <div className={`cards col-${cards.length}`}>
      {cards.map((card:CardProps) => (
        <div id={card.sys && card.sys.id} key={uuid()} className="card">
          <div className="card-image-container">
            <img
              className="card-image lazyload"
              data-src={`${card.image.url}?w=1024`}
              data-srcset={card.srcset}
              alt={card.heading} />
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
            <div className="card-text" dangerouslySetInnerHTML={{__html: markdown.toHTML(card.content)}}>
            </div>
            {card.link && card.cta && <Button link={card.link} style="primary">{card.cta}</Button>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
