/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import FeaturedArticle from '../components/FeaturedArticle';

type Props = {
  data: any
};

class FeaturedArticleContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  render() {
    const { data } = this.props;
    const article = get(data, 'articles', {});

    return (
      <FeaturedArticleContainer article={article} />
    );
  }
}

export default graphql(gql`
  query FeaturedArticle() {
    articles(q:"fields.featured=true") {
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
    return {
      fetchPolicy: 'network-only'
    }
  }
})(FeaturedArticleContainer);
