/* @flow */
import React from 'react';
import Button from './Button';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-top"></div>
      <div className="contact">
        <div className="form-container">
          <form id="form" className="form">
            <a name="contact"></a>
            <h2 className="form-heading">Contact Us</h2>
            <div id="msg" className="msg"></div>

            <div className="form-row-1col">
              <label className="form-label">
                Name:
              </label>
              <input
                className="textfield"
                pattern="[A-Za-z .]+"
                type="text"
                name="name"
                required
                placeholder="Name" />
            </div>

            <div className="form-row">
              <div className="form-col">
                <label className="form-label">
                  Email:
                </label>
                <input
                  className="textfield"
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                  required
                  placeholder="Email" />
              </div>
              <div className="form-col">
                <label className="form-label">
                  Phone Number:
                </label>
                <input
                  className="textfield"
                  type="tel"
                  name="phoneNumber"
                  required
                  placeholder="Phone Number" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label className="form-label">
                  Company:
                </label>
                <input
                  className="textfield"
                  type="text"
                  name="company"
                  placeholder="Company" />
              </div>
              <div className="form-col">
                <label className="form-label">
                  Location:
                </label>
                <input
                  className="textfield"
                  type="text"
                  name="location"
                  placeholder="Location" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label className="form-label">
                  Segment (check all that apply):
                </label>
                <label className="form-label">
                  <input className="checkbox" type="checkbox" name="segments[]" value="Cultivation" />
                  Cultivation
                </label>
                <label className="form-label">
                  <input className="checkbox" type="checkbox" name="segments[]" value="Lab" />
                  Lab
                </label>
                <label className="form-label">
                  <input className="checkbox" type="checkbox" name="segments[]" value="Manufacturing" />
                  Manufacturing
                </label>
                <label className="form-label">
                  <input className="checkbox" type="checkbox" name="segments[]" value="Dispensary" />
                  Dispensary
                </label>
              </div>
              <div className="form-col">
                <label className="form-label">
                  Services (check all that apply):
                </label>
                <label className="form-label">
                  <input className="checkbox" type="checkbox" name="services[]" value="Consulting" />
                  Consulting
                </label>
                <label className="form-label">
                  <input className="checkbox" type="checkbox" name="services[]" value="Distributing" />
                  Distributing
                </label>
              </div>
            </div>

            <textarea className="textarea" name="msg"></textarea>
            <Button style="secondary">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
