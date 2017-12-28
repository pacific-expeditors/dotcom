/* @flow */
import React, { Component } from 'react';
import Contact from '../components/Contact';

type Props = {
  data: any,
  refetch: boolean
};

class ContactContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  render() {
    return (
      <Contact />
    );
  }
}

export default ContactContainer;
