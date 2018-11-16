/* @flow */
import React from 'react'

type AddressProps = {
  name: string,
  map: string,
  city: string,
  state: string,
  zip: number,
  phoneNumber: string,
  email: string
}

export default ({name, map, streetName, city, state, zip, phoneNumber, email, textBelowAddress}:AddressProps) => {
  return (
    <div className="address-container">
      <div className="address-info">
        <h2 className="address-heading">
          {name}
        </h2>
        <address className="address-address">
          {streetName}<br />
          {city}, {state} {zip}<br />
          {phoneNumber}<br />
          <a href={`mailto:${email}`}>{email}</a>
        </address>

        <div className="address-text-below">
          {textBelowAddress}
        </div>
      </div>
      <div className="address-map" dangerouslySetInnerHTML={{__html: map}} />
    </div>
  )
}
