/* @flow */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import get from 'lodash.get';
import Grids from '../components/Grids';

class GridContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const columns = get(data, 'grid.columns', {});

    return (
      <Grids columns={cards} />
    );
  }
}

export default graphql(gql`
  query Grid($id: ID!) {
    grid(id:$id) {
      id
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(GridContainer);
