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
        <form>
          <h2 className="h2">Contact Us</h2>
          <input className="textfield" type="text" name="name" placeholder="Name" />
          <input className="textfield" type="email" name="email" placeholder="Email" />
          <input className="textfield" type="phone" name="phoneNumber" placeholder="Phone Number" />
          <input className="textfield" type="company" name="company" placeholder="Company" />
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
