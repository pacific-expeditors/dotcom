'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query Page($slug: String!) {\n    pages(q:$slug) {\n      id\n      title\n      sections {\n        sys {\n          id\n        }\n        __typename\n      }\n    }\n  }\n'], ['\n  query Page($slug: String!) {\n    pages(q:$slug) {\n      id\n      title\n      sections {\n        sys {\n          id\n        }\n        __typename\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var typekit = 'try{Typekit.load({ async: true });}catch(e){}';

var styles = {
  page: {}
};

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.refetch) {
        this.props.data.refetch();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = this.props.data;

      var pages = (0, _lodash.get)(data, 'pages', [{ sections: [], title: '404' }]);

      return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement('meta', { charset: 'UTF-8' }),
          _react2.default.createElement('meta', { name: 'robots', content: 'noodp' }),
          _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' }),
          _react2.default.createElement('meta', { name: 'description', content: '' }),
          _react2.default.createElement(
            'title',
            null,
            pages[0].title
          ),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css' }),
          _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/components.css' }),
          _react2.default.createElement('link', { rel: 'shortcut icon', href: '//images.contentful.com/i9tcznuksxng/6sOqPxBI2I6W8YOywA8MMS/175367657312135a673789aeaa3685b1/favicon.png?h=16' }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '' }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '' }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '' }),
          _react2.default.createElement('link', { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '' }),
          _react2.default.createElement('script', { src: 'https://use.typekit.net/rnz3htj.js' }),
          _react2.default.createElement(
            'script',
            null,
            typekit
          ),
          _react2.default.createElement('base', { href: '/' })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement(
            'div',
            { className: 'page', style: styles.page },
            pages[0].sections.map(function (section) {
              var Section = require('./' + section.__typename).default;
              return _react2.default.createElement(Section, {
                refetch: _this2.props.refetch,
                key: section.sys.id,
                id: section.sys.id });
            })
          ),
          _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js' }),
          _react2.default.createElement('script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js' }),
          _react2.default.createElement('script', { src: '/static/global.min.js' })
        )
      );
    }
  }]);

  return Page;
}(_react.Component);

exports.default = (0, _reactApollo.graphql)((0, _reactApollo.gql)(_templateObject), {
  options: function options(_ref) {
    var slug = _ref.slug;
    return { variables: { slug: 'fields.id=' + slug } };
  }
})(Page);