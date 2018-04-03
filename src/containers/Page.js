/* @flow */
import React, { Component } from 'react'
import get from 'lodash.get'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Loadable from 'react-loadable'
import { existsSync } from 'fs'
import Modal from '../components/Modal'
import * as Containers from './index'

type Props = {
  data: any
}

class Page extends Component<void, Props, State> {
  props: Props
  state: void

  constructor(props:Props) {
    super(props)

    props.data.refetch()
  }

  render() {
    const { data } = this.props
    const title = get(data, 'pages[0].title', '404')
    const sections = get(data, 'pages[0].sections', [{__typename: '404', sys: {id: 0}}])
    const description = get(data, 'pages[0].metaDescription', "")
    const url = "http://www.pacificexpeditors.com/"

    return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="robots" content="noodp" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0" />
          <meta name="description" content={description} />

          <meta property="og:title" content={title} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Pacific Expeditors" />

          <meta property="twitter:site" content="@Pac_Ex" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:description" content={description} />

          <title>{title}</title>

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
          <link rel="stylesheet" type="text/css" href="/static/main.css" />
          <link rel="stylesheet" type="text/css" href="/static/home.css" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,900" rel="stylesheet" />

          <link rel="shortcut icon" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=16" />

          <link rel="apple-touch-icon-precomposed" sizes="60x60" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=60" />
          <link rel="apple-touch-icon-precomposed" sizes="76x76" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=76" />
          <link rel="apple-touch-icon-precomposed" sizes="120x120" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=120" />
          <link rel="apple-touch-icon-precomposed" sizes="152x152" href="//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=152" />

          <base href="/" />
        </head>
        <body>
          <div className="page">
            <Modal />
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
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
          <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
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
  options: ({slug}:Options) => {
    return {
      variables: {
        slug: `fields.id=${slug}`
      },
      fetchPolicy: 'network-only'
    }
  }
})(Page)
