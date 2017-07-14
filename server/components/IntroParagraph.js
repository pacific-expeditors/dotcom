/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { RaisedButton } from 'material-ui';
import { get } from 'lodash';

import query from './queries/intro';

const styles = {
  introParagraph: {
    width: '1100px',
    margin: '20px auto'
  },
  heading: {
    fontSize: '24px',
    fontWeight: 300,
    lineHeight: 1.5,
    color: '#263238',
    marginTop: 0
  },
  content: {
    color: '#455a64',
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: 1.5
  },
  button: {
    color: '#fff',
    boxShadow: 'none'
  }
};

class IntroParagraph extends Component {
  render() {
    const {
      data
    } = this.props;

    return (
      <section style={styles.introParagraph}>
        <h1 style={styles.heading}>{get(data, 'introParagraph.heading', '')}</h1>

        <p style={styles.content}>
          {get(data, 'introParagraph.content', '')}
        </p>

        <RaisedButton
          primary
          href={get(data, 'introParagraph.callToActionLink', '')}
          style={styles.button}
          buttonStyle={styles.button}>
          {get(data, 'introParagraph.callToActionText', 'Click Me')}
        </RaisedButton>
      </section>
    );
  }
}

export default graphql(query, {
  options: props => { return { variables: { id: props.id } }; }
})(IntroParagraph);
