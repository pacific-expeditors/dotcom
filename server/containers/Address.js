/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import Address from '../components/Address';

type Props = {
  data: any
};

class AddressContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  render() {
    const { data } = this.props;
    const address = get(data, 'address', {});

    return (
      <Address {...address} />
    );
  }
}

export default graphql(gql`
  query Address($id: ID!) {
    address(id:$id) {
      id
      name
      streetName
      city
      state
      zip
      phoneNumber
      email
      map
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id },
      fetchPolicy: 'network-only'
    }
  }
})(AddressContainer);
