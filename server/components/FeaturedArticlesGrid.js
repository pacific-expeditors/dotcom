/* @flow */
import React from 'react';
import Button from './Button';

type ArticleProps = {
  id: string,
  attachments: [any],
  title: string,
  excerpt: string
};

type FeaturedPostProps = {
  articles: [ArticleProps]
};

const FeaturedArticlesGrid = ({articles}:FeaturedPostProps) => {
  return (
    <div className="featured-articles-container">
      {articles.map(article => {
        return (
          <article id={article.id} className="featured-article-col">
            <div className="featured-article-col-attachments fade-in-obj">
              {article.attachments && (
                <img
                  className="featured-article-col-attachment-image lazyload"
                  data-src={`${article.attachments[0].url}?w=1920`} />
              )}
            </div>
            <section className="featured-article-col-text">
              <h2 className="featured-article-col-heading">{article.title}</h2>
              <p className="featured-article-col-text-excerpt">
                {article.excerpt}
              </p>
              <Button link={article.id}>
                More
              </Button>
            </section>
          </article>
        );
      })}
    </div>
  );
};

export default FeaturedArticlesGrid;
