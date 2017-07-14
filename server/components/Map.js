/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { RaisedButton } from 'material-ui';
import { get } from 'lodash';

import query from './queries/map';

const styles = {
  map: {
    position: 'relative'
  },
  frame: {
    border: 'none',
    width: '100%',
    minHeight: '90vh'
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  caption: {
    position: 'absolute',
    top: '40%',
    left: '80px',
    zIndex: 1
  },
  captionText: {
    fontSize: '40px',
    fontWeight: 'normal',
    lineHeight: '40px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'block',
    color: '#fff'
  },
  button: {
    color: '#fff'
  }
};

class Map extends Component {
  render() {
    const { data } = this.props;

    return (
      <section style={styles.map}>
        <iframe src={get(data, 'map.src', '')} style={styles.frame}></iframe>
        <div style={styles.overlay}></div>
        <div style={styles.caption}>
          <h2 style={styles.captionText}>{get(data, 'map.caption', '')}</h2>
          <RaisedButton
            primary
            href={get(data, 'map.callToActionLink', '')}
            buttonStyle={styles.button}>
            {get(data, 'map.callToActionText', 'Click Me')}
          </RaisedButton>
        </div>
      </section>
    );
  }
}

export default graphql(query, {
  options: props => { return { variables: { id: props.id } }; }
})(Map);
