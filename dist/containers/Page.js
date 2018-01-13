'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query Page($slug: String!) {\n    pages(q:$slug) {\n      id\n      title\n      metaDescription\n      sections {\n        sys {\n          id\n        }\n        __typename\n      }\n    }\n  }\n'], ['\n  query Page($slug: String!) {\n    pages(q:$slug) {\n      id\n      title\n      metaDescription\n      sections {\n        sys {\n          id\n        }\n        __typename\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _fs = require('fs');

var _Modal = require('../components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  page: {}
};

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    props.data.refetch();
    return _this;
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var title = (0, _lodash2.default)(data, 'pages[0].title', '404');
      var sections = (0, _lodash2.default)(data, 'pages[0].sections', [{ __typename: '404', sys: { id: 0 } }]);
      var description = (0, _lodash2.default)(data, 'pages[0].metaDescription', "");

      return _react2.default.createElement(
        'html',
        { lang: 'en' },
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement('meta', { charSet: 'UTF-8' }),
          _react2.default.createElement('meta', { name: 'robots', content: 'noodp' }),
          _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0' }),
          _react2.default.createElement('meta', { name: 'description', content: description }),
          _react2.default.createElement(
            'title',
            null,
            title
          ),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' }),
          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/components.css' }),
          _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,900', rel: 'stylesheet' }),
          _react2.default.createElement('link', { rel: 'shortcut icon', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=16' }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=60' }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=76' }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=120' }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=152' }),
          _react2.default.createElement('base', { href: '/' })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement(
            'div',
            { className: 'page', style: styles.page },
            _react2.default.createElement(_Modal2.default, null),
            sections.map(function (section) {
              var path = __dirname + '/' + section.__typename + '.js';
              if (!(0, _fs.existsSync)(path)) {
                return;
              }

              var Section = require(path).default;
              return _react2.default.createElement(Section, {
                key: section.sys.id,
                id: section.sys.id });
            })
          ),
          _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/3.0.0/lazysizes.min.js' }),
          _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js' }),
          _react2.default.createElement('script', { src: '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js' }),
          _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js' }),
          _react2.default.createElement('script', { src: '/static/global.js' })
        )
      );
    }
  }]);

  return Page;
}(_react.Component);

exports.default = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options(_ref) {
    var slug = _ref.slug;

    return {
      variables: {
        slug: 'fields.id=' + slug
      },
      fetchPolicy: 'network-only'
    };
  }
})(Page);