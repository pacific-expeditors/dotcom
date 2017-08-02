/* @flow */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { get } from 'lodash';
import Contact from '../components/Contact';

class ContactContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const addresses = get(data, 'contact.addresses', {});

    return (
      <Contact addresses={addresses} />
    );
  }
}

export default graphql(gql`
  query Contact($id: ID!) {
    contact(id:$id) {
      id
      addresses {
        ... on Address {
          id
          name
          streetName
          streetName2
          city
          state
          zip
          phoneNumber
        }
      }
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(ContactContainer);
