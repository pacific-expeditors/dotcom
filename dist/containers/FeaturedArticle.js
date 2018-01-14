'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query FeaturedArticle {\n    articles(q:"fields.featured=true") {\n      id\n      title\n      excerpt\n      attachments {\n        url\n      }\n    }\n  }\n'], ['\n  query FeaturedArticle {\n    articles(q:"fields.featured=true") {\n      id\n      title\n      excerpt\n      attachments {\n        url\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _FeaturedArticle = require('../components/FeaturedArticle');

var _FeaturedArticle2 = _interopRequireDefault(_FeaturedArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeaturedArticleContainer = function (_Component) {
  _inherits(FeaturedArticleContainer, _Component);

  function FeaturedArticleContainer() {
    _classCallCheck(this, FeaturedArticleContainer);

    return _possibleConstructorReturn(this, (FeaturedArticleContainer.__proto__ || Object.getPrototypeOf(FeaturedArticleContainer)).apply(this, arguments));
  }

  _createClass(FeaturedArticleContainer, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var article = (0, _lodash2.default)(data, 'articles[0]', {});

      return _react2.default.createElement(_FeaturedArticle2.default, article);
    }
  }]);

  return FeaturedArticleContainer;
}(_react.Component);

exports.default = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options() {
    return {
      fetchPolicy: 'network-only'
    };
  }
})(FeaturedArticleContainer);