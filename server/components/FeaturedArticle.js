/* @flow */
import React from 'react';

type FeaturedArticleProps = {
  id: string,
  attachments: [any],
  title: string,
  excerpt: string
};

const FeaturedArticle = ({id, attachments, title, excerpt}:FeaturedPostProps) => {
  return (
    <div
      key={id}
      id={id}
      className="featured-article-container">
      <div className="featured-article">
        <div className="featured-article-attachments fade-in-obj">
          <img
            className="featured-article-attachment-image lazyload"
            data-src={`${attachments[0].url}?w=1920`} />
        </div>
        <div className="featured-article-text">
          <h2 className="featured-article-heading">{title}</h2>
          <p className="featured-article-text-excerpt">
            {excerpt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
