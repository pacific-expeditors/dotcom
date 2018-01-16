/* @flow */
import React from 'react';

type ArticleProps = {
  id: string,
  title: string,
  description: string,
  attachments: any
};

const Article = ({id, title, description, attachments}:ArticleProps) => {
  return (
    <article className="article-container">
      <div className="article">
        <h2 className="article-heading">
          {title}
        </h2>
        <div className="article-body">
          {description}
        </div>
      </div>
    </article>
  );
};

export default Article;
