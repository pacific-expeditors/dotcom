'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query IntroVideo($id: ID!) {\n    introductionVideo(id:$id) {\n      id\n      logo\n      sources {\n        url\n      }\n    }\n  }\n'], ['\n  query IntroVideo($id: ID!) {\n    introductionVideo(id:$id) {\n      id\n      logo\n      sources {\n        url\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _lodash = require('lodash');

var _IntroVideo = require('pacific-expeditors-styleguide/IntroVideo');

var _IntroVideo2 = _interopRequireDefault(_IntroVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IntroVideoComponent = function (_Component) {
  _inherits(IntroVideoComponent, _Component);

  function IntroVideoComponent() {
    _classCallCheck(this, IntroVideoComponent);

    return _possibleConstructorReturn(this, (IntroVideoComponent.__proto__ || Object.getPrototypeOf(IntroVideoComponent)).apply(this, arguments));
  }

  _createClass(IntroVideoComponent, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var introductionVideo = (0, _lodash.get)(data, 'introductionVideo', { sources: [] });
      var sources = introductionVideo.sources.map(function (source) {
        return {
          type: "video/mp4",
          src: source.url
        };
      });

      return _react2.default.createElement(_IntroVideo2.default, {
        autoPlay: true,
        loop: true,
        sources: sources,
        logo: introductionVideo.logo,
        src: introductionVideo.sources[0].url });
    }
  }]);

  return IntroVideoComponent;
}(_react.Component);

exports.default = (0, _reactApollo.graphql)((0, _reactApollo.gql)(_templateObject), {
  options: function options(_ref) {
    var id = _ref.id;

    return {
      variables: { id: id }
    };
  }
})(IntroVideoComponent);