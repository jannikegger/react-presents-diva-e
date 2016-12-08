'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultTheme = function (_Component) {
  _inherits(DefaultTheme, _Component);

  function DefaultTheme() {
    _classCallCheck(this, DefaultTheme);

    return _possibleConstructorReturn(this, (DefaultTheme.__proto__ || Object.getPrototypeOf(DefaultTheme)).apply(this, arguments));
  }

  _createClass(DefaultTheme, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      (0, _styledComponents.injectGlobal)(_templateObject, globalStyles);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Droid+Sans|Yanone+Kaffeesatz',
        rel: 'stylesheet',
        type: 'text/css'
      });
    }
  }]);

  return DefaultTheme;
}(_react.Component);

exports.default = DefaultTheme;


var globalStyles = '\n  html, body {\n    height: 100%;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  * {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: \'Droid Sans\', sans-serif;\n    font-size: 20px;\n  }\n  h1, h2, h3, h4 {\n    font-family: \'Yanone Kaffeesatz\', sans-serif;\n    font-weight: 400;\n    margin: 0 0 1rem;\n  }\n  h1 {\n    font-size: 2.5rem;\n  }\n  h2 {\n    font-size: 1.75rem;\n  }\n  h3 {\n    font-size: 1.5rem;\n  }\n  h4 {\n    font-size: 1rem;\n  }\n\n  li {\n    margin: 0 0 0.5rem;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  a {\n    color: #F92672;\n    text-decoration: none;\n  }\n\n  p {\n    margin: 0 0 1rem;\n  }\n\n  code {\n    background: #e7e8e2;\n    border-radius: 5px;\n    font-family: monospace;\n  }\n\n  button {\n    font-family: \'Yanone Kaffeesatz\';\n    padding: 0.5rem 1rem;\n    border-radius: 0.5rem;\n    border: none;\n    background-color: #F92672;\n    color: #fff;\n    font-weight: 400;\n    font-size: 20px;\n    cursor: pointer;\n  }\n\n  button:disabled {\n    background-color: #CFD8DC;\n    cursor: default;\n  }\n';