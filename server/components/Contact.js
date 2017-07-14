/* @flow */
import React, { Component } from 'react';

const styles = {
  contact: {

  },
  heading: {

  },
  mapPlaceholder: {

  },
  address: {

  }
}

export default class extends Component {
  render() {
    return (
      <section style={styles.contact}>
        <h1 style={styles.heading}>Contact</h1>

        <div style={styles.mapPlaceholder}>
          Map placeholder
        </div>

        <div style={styles.address}>
          Address placeholder
        </div>
      </section>
    );
  }
}
