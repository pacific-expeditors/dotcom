/* @flow */
import React from 'react';

const styles = {
  container: {},
  heading: {
    textAlign: 'center',
    fontFamily: 'Europa',
    fontSize: 36,
    fontWeight: 'normal',
    textTransform: 'uppercase',
    color: '#4F4F4F',
    margin: '12px 0'
  },
  content: {
    textAlign: 'center',
    fontFamily: 'Europa',
    fontSize: 16,
    fontWeight: 300,
    color: '#A6A6A6',
    padding: '8px 0'
  }
};

const Error404 = () => {
  return (
    <div className="error-404">
      <h2 style={styles.heading}>Page Not Found</h2>
      <p style={styles.content}>Sorry the page you were looking for does not exist.</p>
    </div>
  );
};

export default Error404;
