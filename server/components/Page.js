/* @flow */
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { get } from 'lodash';

import query from './queries/page';

class Page extends Component {
  render() {
    const { data } = this.props;
    const pages = get(data, 'pages', [{sections: []}]);

    return (
      <div>
        {pages[0].sections.map(section => {
          const Component = require(`./${section.__typename}`).default;

          return (
            <Component
              key={section.sys.id}
              id={section.sys.id} />
          )
        })}
      </div>
    );
  }
}

export default graphql(query, {
  options: props => { return { variables: { slug: `fields.slug=${props.slug}` } }; }
})(Page);
