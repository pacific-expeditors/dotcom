/* @flow */
import React, { Component } from 'react';
import get from 'lodash.get';
import { graphql, gql } from 'react-apollo';
import { existsSync } from 'fs';

type Props = {
  data: [],
  refetch: boolean
};

const styles = {
  page: {}
}

class Page extends Component {
  props: Props;

  componentWillMount() {
    if (this.props.refetch) {
      this.props.data.refetch();
    }
  }

  render() {
    const { data } = this.props;
    const title = get(data, 'pages[0].title', '404');
    const sections = get(data, 'pages[0].sections', [{__typename: '404', sys: {id: 0}}]);
    const description = get(data, 'pages[0].metaDescription', "");

    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="robots" content="noodp" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0" />
          <meta name="description" content={description} />
          <title>{title}</title>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/components.min.css?v=1" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,900" rel="stylesheet" />

          <link rel="shortcut icon" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=16" />

          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=60" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=76" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=120" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=152" />

          <base href="/" />
        </head>
        <body>
          <div className="page" style={styles.page}>
            {sections.map(section => {
              const path = `${__dirname}/${section.__typename}.js`;
              if (!existsSync(path)) {
                return;
              }

              const Section = require(path).default;
              return (
                <Section
                  refetch={this.props.refetch}
                  key={section.sys.id}
                  id={section.sys.id} />
              );
            })}
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js"></script>
          <script src={`/static/global.min.js`}></script>
        </body>
      </html>
    );
  }
}

export default graphql(gql`
  query Page($slug: String!) {
    pages(q:$slug) {
      id
      title
      metaDescription
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
