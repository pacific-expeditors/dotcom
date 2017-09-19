/* @flow */
import React, { Component } from 'react';
import get from 'lodash.get';
import { graphql, gql } from 'react-apollo';
import { existsSync } from 'fs';
import ContactForm from '../components/Contact';
import Header from '../components/Header';
import IntroVideo from '../components/IntroVideo';
import Grid from '../components/Grid';
import Cards from '../components/Cards';
import CardWithBackground from '../components/CardWithBackground';

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
          <link rel="stylesheet" type="text/css" href="/static/components.css" />
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
            <Header logo="https://images.contentful.com/i9tcznuksxng/3a1uukIFrGSemquqI6MuOI/1a216d5b4ae4824cd9ba6261042fb5ad/PacExLogoDark.svg" />
            <IntroVideo
              src="//videos.contentful.com/i9tcznuksxng/1xGfj5KOqsugAYikaQQgqO/2ec3c5f4fbadfb9e5cf420523a82e4b0/out.mp4"
              heading="Get The Confidence You Deserve"
              subHeading="Secure the most accomplished cannabis distributor possible."
              cta="Learn More"
              link='#contact'
              sources={[
              {
                src: "//videos.contentful.com/i9tcznuksxng/1xGfj5KOqsugAYikaQQgqO/2ec3c5f4fbadfb9e5cf420523a82e4b0/out.mp4",
                type: "video/mp4"
              }
            ]} />
          <Grid
            heading='It Begins With An Unbreakable Alliance'
            content={`
            Your business is your passion. It consumes your
attention and creative spirit; that is why it succeeds. For a business to grow, it must have capable teams, partnerships built on trust, and a shared vision, not just another vendor. Pacific Expeditors is our passion. We bring proficiency, experience, and concern for every detail to the distributor function.

We’re Pacific Expeditors. Count on us for peace of mind.`}
            linkText='Connect'
            link='#contact'
            align="end"
            subText='We’re Pacific Expeditors. Count on us for peace of mind.'
            image='//images.contentful.com/i9tcznuksxng/6N29WmTHVuOCkMsaImasWI/e9834c8610c9c96135aac8d368241a0b/iStock-578578754.jpg?w=512' />

          <Grid
            heading='It Begins With An Unbreakable Alliance'
            content={`
            Your business is your passion. It consumes your
attention and creative spirit; that is why it succeeds. For a business to grow, it must have capable teams, partnerships built on trust, and a shared vision, not just another vendor. Pacific Expeditors is our passion. We bring proficiency, experience, and concern for every detail to the distributor function.

We’re Pacific Expeditors. Count on us for peace of mind.`}
            linkText='Connect'
            link='#contact'
            align="end"
            subText='We’re Pacific Expeditors. Count on us for peace of mind.'
            image='//images.contentful.com/i9tcznuksxng/6N29WmTHVuOCkMsaImasWI/e9834c8610c9c96135aac8d368241a0b/iStock-578578754.jpg?w=512' />

          <CardWithBackground heading="Our Team" />
            {/*sections.map(section => {
              // if (section.__typename !== 'Header') return;
              //
              // const path = `${__dirname}/${section.__typename}.js`;
              // if (!existsSync(path)) {
              //   return;
              // }
              //
              // const Section = require(path).default;
              // return (
              //   <Section
              //     refetch={this.props.refetch}
              //     key={section.sys.id}
              //     id={section.sys.id} />
              // );
            })*/}
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js"></script>
        </body>
      </html>
    );
  }
}

export default Page;
/*export default graphql(gql`
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
})(Page);*/
