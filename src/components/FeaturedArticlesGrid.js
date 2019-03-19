/* @flow */
import React from 'react'
import Button from './Button'

type ArticleProps = {
  id: string,
  attachments: [any],
  title: string,
  excerpt: string
}

type FeaturedPostProps = {
  articles: [ArticleProps]
}

const FeaturedArticlesGrid = ({articles}:FeaturedPostProps) => {
  return (
    <div className="featured-articles-container">
      {articles.map(article => {
        return (
          <article key={article.sys.id} id={article.sys.id} className="featured-article-col">
            <div className="featured-article-col-attachments fade-in-obj">
              {article.attachments && (
                <img
                  className="featured-article-col-attachment-image lazyload"
                  data-src={`${article.attachments[0].url}?w=1920`} />
              )}
            </div>
            <h2 className="featured-article-col-heading">
              <a href={`article/${article.id}`}>
                {article.title}
              </a>
            </h2>
            <p className="featured-article-col-text-excerpt">
              {article.excerpt}
            </p>
            <Button link={`article/${article.id}`}>
              Read
            </Button>
          </article>
        )
      })}
    </div>
  )
}

export default FeaturedArticlesGrid
