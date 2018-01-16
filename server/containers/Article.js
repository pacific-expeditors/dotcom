/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import Article from '../components/Article';

type Props = {
  data: any
};

class ArticleContainer extends Component<void, Props, void> {
  props: Props;
  state: void;

  render() {
    const { data } = this.props;
    const article = get(data, 'articles[0]', {});

    return (
      <Article {...article} />
    );
  }
}

export default graphql(gql`
  query Article($article: String!) {
    articles(q:$article) {
      id
      title
      description
      attachments {
        url
      }
    }
  }
`, {
  options: ({article}) => {
    return {
      variables: { article: `fields.id=${article}` },
      fetchPolicy: 'network-only'
    }
  }
})(ArticleContainer);
