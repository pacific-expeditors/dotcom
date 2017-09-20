'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
  return _react2.default.createElement(
    'div',
    { className: 'contact-wrapper' },
    _react2.default.createElement('div', { className: 'contact-top' }),
    _react2.default.createElement(
      'div',
      { className: 'contact' },
      _react2.default.createElement(
        'div',
        { className: 'form-container' },
        _react2.default.createElement(
          'form',
          { id: 'form', className: 'form' },
          _react2.default.createElement(
            'h2',
            { className: 'form-heading' },
            'Contact Us'
          ),
          _react2.default.createElement('div', { id: 'msg', className: 'msg' }),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              { className: 'form-label' },
              'Name'
            ),
            _react2.default.createElement('input', {
              className: 'textfield',
              pattern: '[A-Za-z .]+',
              type: 'text',
              name: 'name',
              required: true,
              placeholder: 'Name' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              { className: 'form-label' },
              'Email'
            ),
            _react2.default.createElement('input', {
              className: 'textfield',
              type: 'email',
              name: 'email',
              pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$',
              required: true,
              placeholder: 'Email' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              { className: 'form-label' },
              'Email'
            ),
            _react2.default.createElement('input', {
              className: 'textfield',
              type: 'tel',
              name: 'phoneNumber',
              required: true,
              placeholder: 'Phone Number' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              { className: 'form-label' },
              'Company'
            ),
            _react2.default.createElement('input', {
              className: 'textfield',
              type: 'text',
              name: 'company',
              placeholder: 'Company' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'label',
              { className: 'form-label' },
              'Preferred Method of Contact'
            ),
            _react2.default.createElement(
              'select',
              { className: 'select', name: 'contactMethod' },
              _react2.default.createElement(
                'option',
                { value: 'Email' },
                'Email'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Phone' },
                'Phone'
              )
            )
          ),
          _react2.default.createElement('textarea', { className: 'textarea', name: 'msg' }),
          _react2.default.createElement(
            _Button2.default,
            { style: 'secondary' },
            'Submit'
          )
        )
      )
    )
  );
};

exports.default = Contact;