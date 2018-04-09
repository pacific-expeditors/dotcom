/* @flow */
import React from 'react'
import Button from './Button'

type ColumnProps = {
  link?: string,
  cta?: string,
  heading: string,
  content: string,
  style: string,
  image: string,
  srcset: [string]
}

type GridProps = {
  columns: [ColumnProps]
}

const Grid = ({id, columns = [], heading, content, image, cta, link, srcset = []}:GridProps) => {
  return (
    <div key={id} id={id} className="grid-container">
      <div className="grid-container-image">
        <img
          className="grid-image lazyload"
          data-src={`${image.url}?w=1080`}
          data-srcset={srcset}
          alt={heading} />
        <div className="grid-image-overlay"></div>
      </div>
      <div key={id} id={id} className="grid">
        <h2 className="grid-heading">{heading}</h2>
        <div className="grid-content">{content}</div>
          <div className="col-container">
            {columns.map(({icon, heading, content, style}) => {
              if (style == 'gray') {
                return (
                  <div className="col-wrapper">
                    <div className="col-gray">
                      <p className="col-gray-content">{content}</p>
                    </div>
                  </div>
                )
              }

              return (
                <div className="col-wrapper">
                  <div className="col">
                    <i className={`col-icon fa fa-${icon}`}></i>
                    <h3 className="col-heading">{heading}</h3>
                  </div>
                </div>
              )
            })}
          </div>
        <div className="grid-cta">
          {link && cta && <Button style="secondary" link={link}>{cta}</Button>}
        </div>
      </div>
    </div>
  )
}

export default Grid
