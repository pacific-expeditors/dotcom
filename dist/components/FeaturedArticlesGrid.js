'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeaturedArticlesGrid = function FeaturedArticlesGrid(_ref) {
  var articles = _ref.articles;

  return _react2.default.createElement(
    'div',
    { className: 'featured-articles-container' },
    articles.map(function (article) {
      return _react2.default.createElement(
        'article',
        { id: article.id, className: 'featured-article-col' },
        _react2.default.createElement(
          'div',
          { className: 'featured-article-col-attachments fade-in-obj' },
          article.attachments && _react2.default.createElement('img', {
            className: 'featured-article-col-attachment-image lazyload',
            'data-src': article.attachments[0].url + '?w=1920' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'featured-article-col-text' },
          _react2.default.createElement(
            'h2',
            { className: 'featured-article-col-heading' },
            article.title
          ),
          _react2.default.createElement(
            'p',
            { className: 'featured-article-col-text-excerpt' },
            article.excerpt
          ),
          _react2.default.createElement(
            _Button2.default,
            { link: 'article/' + article.id },
            'More'
          )
        )
      );
    })
  );
};

exports.default = FeaturedArticlesGrid;