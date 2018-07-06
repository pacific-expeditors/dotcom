/* @flow */
import React from 'react'
import Button from './Button'

export default () => {
  return (
    <div id="modal" className="modal-wrapper" style={{display: 'none'}}>
      <div className="modal">
        <h2 className="modal-heading">Verify Age</h2>
        <p className="modal-body">
          Are you at least 21 years old?
        </p>
        <Button link="#">Yes, I am at least 21 years old</Button>
      </div>
    </div>
  )
}
