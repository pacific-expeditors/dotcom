/* @flow */
import React, { Component } from 'react'
import get from 'lodash.get'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Modal from '../components/Modal'
import Loading from '../components/Loading'
import * as Containers from './index'
import 'isomorphic-fetch'

type Props = {
  data: any
}

class Page extends Component<void, Props, State> {
  props: Props
  state: void

  constructor(props:Props) {
    super(props)
  }

  render() {
    const { data } = this.props
    const title = get(data, 'pages[0].title', 'Page Not Found')
    const sections = get(data, 'pages[0].sections', [
      { sys: { id: '1GgdoWfYEQW84U4MIWMw8K' }, __typename: 'Header' },
      { sys: { id: '5dCae4OehyeEkeY8Oue6UA' }, __typename: 'HeroVideo' },
      { sys: { id: '7CbqJVaCNUgUgKAQ4K0Sky' }, __typename: 'Footer' }
    ])
    const description = get(data, 'pages[0].metaDescription', '')
    const url = "http://www.pacificexpeditors.com/"

    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="robots" content="noodp" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0" />
          <meta name="description" content={this.props.metaDescription || description} />

          <meta property="og:title" content={this.props.title || title} />
          <meta property="og:description" content={this.props.metaDescription || description} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Pacific Expeditors" />

          <meta property="twitter:site" content="@Pac_Ex" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={this.props.title || title} />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:description" content={this.props.metaDescription || description} />

          <title>{this.props.title || title}</title>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,900" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" href={`/static/main.css?s=${Math.floor(Math.random() * 100000)}`} />

          <link rel="shortcut icon" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=16" />

          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=60" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=76" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=120" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=152" />

          <base href="/" />
          
          <style dangerouslySetInnerHTML={{ __html:
            `
            .header {
              display: none;
              align-items: center;
              justify-content: center;
              position: relative;
              padding: 24px 0;
              grid-template-columns: 1fr;
            }
            .header-left-nav,
            .header-right-nav {
              display: none;
              font-size: 14;
              font-weight: 900;
              text-transform: uppercase;
              text-decoration: none;
              letter-spacing: 2px;
            }
            .logo-link {
              display: block;
              margin: 0 auto;
            }
            .logo {
              display: block;
              width: 195px;
            }
            .header-mobile {
              position: absolute;
              top: 28px;
              left: 28px;
              right: 0;
              z-index: 4;
            }
            @media (min-width: 1024px) {
              .header {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                margin: 0 auto;
                width: 980px;
              }
              .header-left-nav,
              .header-right-nav {
                display: grid;
                grid-auto-flow: column;
              }
              .header-mobile {
                display: none;
              }
            }

            @media (min-width: 1200px) {
              .header-container {
                position: sticky;
                top: 0;
                background-color: rgba(255, 255, 255, .7);
                z-index: 3;
              }
        
              .header {
                width: 1170px;
              }
            }

            .loading-overlay {
              background-color: #0f4c61;
              position: fixed;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              z-index: 5;
              animation-name: fadeout;
              animation-duration: .25s;
              animation-timing-function: ease-out;
              animation-fill-mode: both;
              animation-delay: 1.5s;
            }
          
            .loading-container {
              display: grid;
              justify-content: center;
              align-content: center;
              height: 100%;
            }
          
            .loading-logo {
              width: 100%;
              animation-name: fadein;
              animation-duration: .25s;
              animation-timing-function: ease-in;
              animation-fill-mode: both;
            }
          
            .loading-logo path {
              fill: #fff;
            }

            .video-container {
              position: relative;
              overflow: hidden;
            }

            .video {
              height: 90vh;
            }

            .video-hr {
              margin: 20px auto;
              background: #fff;
              width: 132px;
              height: 4px;
            }

            .video-overlay-container {
              width: 100%;
              height: 100%;
              display: grid;
              grid-template-columns: 1fr;
              margin: 0 auto;
              align-items: center;
            }

            .video-overlay {
              background: rgba(0, 0, 0, .5);
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              z-index: 1;
            }

            .video-cta {
              width: 100%;
              animation-name: fadein-right;
              animation-duration: .5s;
              animation-timing-function: ease-in;
              animation-delay: 2.25s;
              animation-fill-mode: both;
              opacity: 0;
              text-align: center;
            }

            .video-cta-heading {
              fontSize: 42px;
              margin: 0;
              fontWeight: 600;
              letterSpacing: 1.5px;
              lineHeight: 1;
              color: #fff;
              textTransform: uppercase;
            }

            .video-cta-heading,
            .video-cta-subheading {
              padding: 0 20px;
            }

            .video-cta-subheading {
              font-size: 22px;
              margin: 0;
              line-height: 1.5;
              color: #fff;
              margin: 20px 0;
              font-weight: normal;
            }

            @media (min-width: 480px) {
              .video-cta-heading,
              .video-cta-subheading {
                  padding: 0;
              }
            }

            @media (min-width: 768px) and (orientation: landscape) {
              .video {
                  width: 100%;
                  height: auto;
              }
            }

            @media (min-width: 1200px) {
              .video-overlay-container {
                  width: 1170px;
              }
              
              .video-cta {
                  width: 700px;
                  text-align: left;
              }

              .video-hr {
                  margin: 20px 0;
              }
            }

            @media (min-width: 1200px) and (orientation: portrait) {
              .video-container {
                  height: 90vh;
              }
            }
          `.replace(/\n\s*/g, '') }}>
          </style>
        </head>
        <body>
          <div className="page">
            <Modal />
            <Loading />
            {sections.map((section) => {
              const Section = Containers[section.__typename]

              return (
                <Section
                  article={this.props.article}
                  key={section.sys.id}
                  id={section.sys.id} />
              )
            })}
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/3.0.0/lazysizes.min.js"></script>
          <script src={`/static/client.js`}></script>
          <script dangerouslySetInnerHTML={{__html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-107156593-1', 'auto');
          ga('send', 'pageview');`}}>
          </script>
        </body>
      </html>
    )
  }
}

type Options = {
  slug?: string
}

export default graphql(gql`
  query Page($slug: String!) {
    pages(q:$slug) {
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
  options: ({slug}:Options) => {
    return {
      variables: {
        slug: `fields.id=${slug}`
      }
    }
  }
})(Page)
