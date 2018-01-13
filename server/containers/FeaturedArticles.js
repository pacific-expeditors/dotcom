/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import FeaturedArticles from '../components/FeaturedArticles';

type Props = {
  data: any
};

class FeaturedArticlesContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  render() {
    const { data } = this.props;
    const articles = get(data, 'articles', {});

    return (
      <FeaturedArticles articles={articles} />
    );
  }
}

export default graphql(gql`
  query FeaturedArticles($date: String!) {
    articles(q:$date) {
      id
      title
      excerpt
      attachments {
        url
      }
    }
  }
`, {
  options: () => {
    const date = new Date()
    return {
      variables: {
        date: `fields.publishDate[lte]=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      },
      fetchPolicy: 'network-only'
    }
  }
})(FeaturedArticlesContainer);
