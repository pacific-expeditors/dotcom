/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { RefreshIndicator } from 'material-ui';
import { get } from 'lodash';

import query from './queries/footer';

const styles = {
  footer: {
    backgroundColor: '#eceff1',
    color: '#78909c',
    padding: '16px 0'
  },
  siteTitle: {
    color: '#263238',
    fontWeight: '700'
  },
  footerLinks: {
    width: '1100px',
    margin: '0 auto'
  },
  footerLink: {
    color: '#78909c',
    textDecoration: 'none',
    marginLeft: '20px'
  }
};

class Footer extends Component {
  render() {
    if (this.props.data.loading) {
      return <RefreshIndicator left={0} top={0} />
    }

    const { data } = this.props;
    const navLinks = get(data, 'footer.navLinks', []);

    return (
      <footer style={styles.footer}>
        <nav style={styles.footerLinks}>
          <a style={styles.siteTitle} href="/">{get(data, 'footer.siteTitle', '')}</a>
          {navLinks.map(navLink => {
            return <a style={styles.footerLink} href={navLink.slug}>{navLink.title}</a>
          })}
        </nav>
      </footer>
    );
  }
}

export default graphql(query, {
  options: props => { return { variables: { id: props.id } }; }
})(Footer);
