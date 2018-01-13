'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query RightAlignedTextCard($id: ID!) {\n    rightAlignedTextCard(id:$id) {\n      id\n      heading\n      content\n      background {\n        url\n      }\n      image {\n        url\n      }\n    }\n  }\n'], ['\n  query RightAlignedTextCard($id: ID!) {\n    rightAlignedTextCard(id:$id) {\n      id\n      heading\n      content\n      background {\n        url\n      }\n      image {\n        url\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _RightAlignedTextCard = require('../components/RightAlignedTextCard');

var _RightAlignedTextCard2 = _interopRequireDefault(_RightAlignedTextCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RightAlignedTextCardContainer = function (_Component) {
  _inherits(RightAlignedTextCardContainer, _Component);

  function RightAlignedTextCardContainer() {
    _classCallCheck(this, RightAlignedTextCardContainer);

    return _possibleConstructorReturn(this, (RightAlignedTextCardContainer.__proto__ || Object.getPrototypeOf(RightAlignedTextCardContainer)).apply(this, arguments));
  }

  _createClass(RightAlignedTextCardContainer, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var rightAlignedTextCard = (0, _lodash2.default)(data, 'rightAlignedTextCard', {});

      return _react2.default.createElement(_RightAlignedTextCard2.default, rightAlignedTextCard);
    }
  }]);

  return RightAlignedTextCardContainer;
}(_react.Component);

exports.default = (0, _reactApollo.graphql)((0, _graphqlTag2.default)(_templateObject), {
  options: function options(_ref) {
    var id = _ref.id;

    return {
      variables: { id: id },
      fetchPolicy: 'network-only'
    };
  }
})(RightAlignedTextCardContainer);