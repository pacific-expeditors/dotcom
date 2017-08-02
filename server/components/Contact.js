/* @flow */
import React from 'react';

type AddressProps = {
  id: string,
  name: string,
  streetName: string,
  streetName2?: string,
  city: string,
  state: string,
  zip: number,
  phoneNumber?: string
};

type AddressesProps = {
  addresses: [AddressesProps]
};

const Contact = ({addresses}:AddressesProps) => {
  return (
    <div className="contact">
      {addresses.map(address => {
        return (
          <div className="address">
            <h3 className="h3">{address.name}</h3>
            <div>{address.streetName}</div>
            {address.streetName2 && <div>{address.streetName2}</div>}
            <div>{address.city}, {address.state} {address.zip}</div>
            {address.phoneNumber && <div>{address.phoneNumber}</div>}
          </div>
        );
      })}
      <div className="form">
        <form id="form">
          <h2 className="h2">Contact Us</h2>
          <div id="msg" className="msg"></div>
          <input
            className="textfield"
            pattern="[A-Za-z .]+"
            type="text"
            name="name"
            required
            placeholder="Name" />
          <input
            className="textfield"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            required
            placeholder="Email" />
          <input
            className="textfield"
            type="tel"
            name="phoneNumber"
            required
            placeholder="Phone Number" />
          <input
            className="textfield"
            type="text"
            name="company"
            placeholder="Company" />
          <select className="select" name="contactMethod">
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
          </select>
          <textarea className="textarea" name="msg"></textarea>
          <input className="button" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
