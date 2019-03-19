/* @flow */
import React from 'react'
import showdown from 'showdown'

type ArticleProps = {
  id: string,
  title: string,
  description: string,
  attachments: any
}

const Article = ({title, description}:ArticleProps) => {
  const converter = new showdown.Converter()

  return (
    <article className="article-container">
      <div className="article">
        <h2 className="article-heading">
          {title}
        </h2>
        <div className="article-body" dangerouslySetInnerHTML={{__html: converter.makeHtml(description)}} />
      </div>
    </article>
  )
}

export default Article
