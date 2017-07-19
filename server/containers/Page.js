/* @flow */
import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { get } from 'lodash';

type Props = {
  data: []
};

const js = `
window.onload = function() {
  document.addEventListener('scroll', function(e) {
    var header = document.querySelector(".header");
    var logo = document.querySelector(".logo");

    if (window.pageYOffset >= 400) {
      TweenLite.to(header, .5, {backgroundColor:"rgba(0, 0, 0, .5)"});
      TweenLite.to(logo, .5, {opacity:1});
    } else {
      TweenLite.to(header, .5, {backgroundColor:"transparent"});
      TweenLite.to(logo, .5, {opacity:0});
    }
  });

  document.querySelector('.mobile-menu-link').addEventListener('click', function(e) {
    document.querySelector('.header-mobile').style.display = 'block';
  });

  document.querySelector('.close-icon-link').addEventListener('click', function(e) {
    document.querySelector('.header-mobile').style.display = 'none';
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-102592274-1', 'auto');
  ga('send', 'pageview');
};
`;

const typekit = `try{Typekit.load({ async: true })}catch(e){}}`;

class Page extends Component {
  props: Props;

  render() {
    const { data } = this.props;
    const pages = get(data, 'pages', [{sections: []}]);

    return (
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="robots" content="noodp" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content="" />
          <title>{pages[0].title}</title>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
          <link rel="stylesheet" type="text/css" href="https://unpkg.com/pacific-expeditors-styleguide@0.1.1/components.min.css" />

          <link rel="shortcut icon" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=16" />

          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="" />

          <script src="https://use.typekit.net/rnz3htj.js"></script>
          <script>{typekit}</script>

          <base href="/" />
        </head>
        <body>
          <div className="page" style={{position: 'relative'}}>
            {pages[0].sections.map(section => {
              const Section = require(`./${section.__typename}`).default;
              return <Section key={section.sys.id} id={section.sys.id} />
            })}
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js"></script>
          <script dangerouslySetInnerHTML={{__html: js}} />
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
