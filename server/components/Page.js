/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { get } from 'lodash';

type Props = {
  data: []
};

class Page extends Component {
  props: Props;

  render() {
    const { data } = this.props;
    const pages = get(data, 'pages', [{sections: []}]);

    return (
      <div className="page">
        {pages[0].sections.map(section => {
          const Section = require(`./${section.__typename}`).default;

          return (
            <Section
              key={section.sys.id}
              id={section.sys.id} />
          );
        })}
      </div>
    );
  }
}

export default graphql(gql`
  query Page($slug: String!) {
    pages(q:$slug) {
      id
      title
      sections {
        sys {
          id
        }
        __typename
      }
    }
  }
`, {
  options: ({slug}) => ({ variables: { slug: `fields.id=${slug}` } })
})(Page);
