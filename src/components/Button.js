/* @flow */
import React, { Component } from 'react'

type ButtonProps = {
  link?: string,
  children: string,
  style: 'primary' | 'secondary',
  fullWidth?: boolean
}

const Button = ({children, link, style = 'primary', fullWidth = false}:ButtonProps) => {
  if (link) {
    return (
      <a href={link} className={`button ${style}${fullWidth ? ' full-width' : ''}`}>
        {children}
      </a>
    )
  }

  return (
    <input
      type="submit"
      value={children}
      className={`button ${style}${fullWidth ? ' full-width' : ''}`} />
  )
}

export default Button
