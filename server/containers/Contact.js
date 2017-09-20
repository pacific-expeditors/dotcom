/* @flow */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import get from 'lodash.get';
import Contact from '../components/Contact';

class ContactContainer extends Component {
  render() {
    return (
      <Contact />
    );
  }
}

export default ContactContainer;
