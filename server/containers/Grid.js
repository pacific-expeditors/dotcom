/* @flow */
import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import get from 'lodash.get';
import Grid from '../components/Grid';

class GridContainer extends Component {
  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const columns = get(data, 'grid', {});

    return (
      <Grid {...columns} />
    );
  }
}

export default graphql(gql`
  query Grid($id: ID!) {
    grid(id:$id) {
      id
      heading
      subText
      content
      cta
      align
      link
      image {
        url
      }
    }
  }
`, {
  options: ({id}) => {
    return {
      variables: { id }
    }
  }
})(GridContainer);
