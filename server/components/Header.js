/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { AppBar } from 'material-ui';
import { get } from 'lodash';

import query from './queries/header';

const styles = {
  header: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%'
  },
  nav: {
    display: 'flex'
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '0 40px 0 80px',
    height: '64px'
  },
  link: {
    padding: '0 24px',
    lineHeight: '64px',
    textDecoration: 'none',
    color: '#fff',
    opacity: '.87',
    fontSize: '14px'
  },
  avatarLink: {
    backgroundColor: 'hsla(0, 0%, 100%, .1)',
    borderRadius: '6px',
    padding: '0 12px',
    margin: '10px 0',
    textDecoration: 'none',
    color: '#fff',
    opacity: '.87',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '14px'
  },
  avatar: {
    borderRadius: '28px',
    width: '28px',
    height: '28px',
    marginRight: '10px'
  }
};

class Header extends Component {
  getNavMenu = () => {
    const { data } = this.props;
    const navLinks = get(data, 'header.navLinks', []);

    return (
      <nav key="nav" style={styles.nav}>
        {navLinks.map(navLink => {
          return <a
            style={styles.link}
            key={navLink.slug}
            href={`/${navLink.slug}`}>
              {navLink.title}
            </a>
        })}
      </nav>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <header style={styles.header}>
        <AppBar
          style={styles.appBar}
          title={get(data, 'header.siteTitle', '')}
          iconElementLeft={<span />}
          iconElementRight={this.getNavMenu()} />
      </header>
    );
  }
}

export default graphql(query, {
  options: props => { return { variables: { id: props.id } }; }
})(Header);
