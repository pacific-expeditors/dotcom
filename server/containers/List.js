/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { get } from 'lodash';
import List from '../components/List';

class ListComponent extends Component {
  render() {
    const { data } = this.props;
    const list = get(data, 'list', {});
    const leftListItems = list.leftListItems.split(/\n- /);
    leftListItems.shift();
    const rightListItems = list.rightListItems.split(/\n- /);
    rightListItems.shift();

    return (
      <List leftItems={leftListItems} rightItems={rightListItems} />
    );
  }
}

export default graphql(gql`
  query List($id: ID!) {
    list(id:$id) {
      id
      leftListItems
      rightListItems
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(ListComponent);
