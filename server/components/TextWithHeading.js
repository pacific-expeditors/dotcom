/* @flow */
import React from 'react';

type TextWithHeadingProps = {
  title: string,
  content: string
};

const styles = {
  container: {

  },
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

const TextWithHeading = ({title, content}:TextWithHeadingProps) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{title}</h2>
      <p style={styles.content}>{content}</p>
    </div>
  );
};

export default TextWithHeading;
