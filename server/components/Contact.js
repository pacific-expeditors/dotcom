/* @flow */
import React from 'react';

// type ContactProps = {
//   onSubmit: void => {}
// };

const Contact = () => {
  return (
    <div className="contact">
      <div className="address">
        <h3 className="h3">Pacific Expeditors</h3>
        1550 Airport Blvd. Suite 201<br />
        Santa Rosa, CA 95403
      </div>
      <div className="form">
        <form id="form">
          <h2 className="h2">Contact Us</h2>
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