'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  query CardList($id: ID!) {\n    cardList(id:$id) {\n      id\n      cards {\n        ... on Card {\n          id\n          heading\n          link\n          image {\n            title\n            description\n            url\n          }\n        }\n      }\n    }\n  }\n'], ['\n  query CardList($id: ID!) {\n    cardList(id:$id) {\n      id\n      cards {\n        ... on Card {\n          id\n          heading\n          link\n          image {\n            title\n            description\n            url\n          }\n        }\n      }\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _Cards = require('../components/Cards');

var _Cards2 = _interopRequireDefault(_Cards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardListContainer = function (_Component) {
  _inherits(CardListContainer, _Component);

  function CardListContainer() {
    _classCallCheck(this, CardListContainer);

    return _possibleConstructorReturn(this, (CardListContainer.__proto__ || Object.getPrototypeOf(CardListContainer)).apply(this, arguments));
  }

  _createClass(CardListContainer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.refetch) {
        this.props.data.refetch();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;

      var cardList = (0, _lodash2.default)(data, 'cardList.cards', {});
      var cards = cardList.map(function (card) {
        return _extends({}, card, {
          image: card.image.url + '?h=512&q=80'
        });
      });

      return _react2.default.createElement(_Cards2.default, { cards: cards });
    }
  }]);

  return CardListContainer;
}(_react.Component);

exports.default = (0, _reactApollo.graphql)((0, _reactApollo.gql)(_templateObject), {
  options: function options(_ref) {
    var id = _ref.id;

    return {
      variables: { id: id }
    };
  }
})(CardListContainer);