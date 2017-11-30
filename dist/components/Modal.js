'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal() {
  return _react2.default.createElement(
    'div',
    { id: 'modal', className: 'modal-wrapper', style: { display: 'none' } },
    _react2.default.createElement(
      'div',
      { className: 'modal' },
      _react2.default.createElement(
        'h2',
        { className: 'modal-heading' },
        'Verify Age'
      ),
      _react2.default.createElement(
        'p',
        { className: 'modal-body' },
        'Are you at least 21 years old?'
      ),
      _react2.default.createElement(
        _Button2.default,
        { link: '#' },
        'Yes, I am at least 21 years old'
      )
    )
  );
};

exports.default = Modal;