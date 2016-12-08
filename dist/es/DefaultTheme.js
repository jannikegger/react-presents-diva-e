import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _templateObject = _taggedTemplateLiteral(['', ''], ['', '']);

import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

var DefaultTheme = function (_Component) {
  _inherits(DefaultTheme, _Component);

  function DefaultTheme() {
    _classCallCheck(this, DefaultTheme);

    return _possibleConstructorReturn(this, (DefaultTheme.__proto__ || _Object$getPrototypeOf(DefaultTheme)).apply(this, arguments));
  }

  _createClass(DefaultTheme, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      injectGlobal(_templateObject, globalStyles);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('link', {
        href: 'https://fonts.googleapis.com/css?family=Droid+Sans|Yanone+Kaffeesatz',
        rel: 'stylesheet',
        type: 'text/css'
      });
    }
  }]);

  return DefaultTheme;
}(Component);

export default DefaultTheme;


var globalStyles = '\n  html, body {\n    height: 100%;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  * {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: \'Droid Sans\', sans-serif;\n    font-size: 20px;\n  }\n  h1, h2, h3, h4 {\n    font-family: \'Yanone Kaffeesatz\', sans-serif;\n    font-weight: 400;\n    margin: 0 0 1rem;\n  }\n  h1 {\n    font-size: 2.5rem;\n  }\n  h2 {\n    font-size: 1.75rem;\n  }\n  h3 {\n    font-size: 1.5rem;\n  }\n  h4 {\n    font-size: 1rem;\n  }\n\n  li {\n    margin: 0 0 0.5rem;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  a {\n    color: #F92672;\n    text-decoration: none;\n  }\n\n  p {\n    margin: 0 0 1rem;\n  }\n\n  code {\n    background: #e7e8e2;\n    border-radius: 5px;\n    font-family: monospace;\n  }\n\n  button {\n    font-family: \'Yanone Kaffeesatz\';\n    padding: 0.5rem 1rem;\n    border-radius: 0.5rem;\n    border: none;\n    background-color: #F92672;\n    color: #fff;\n    font-weight: 400;\n    font-size: 20px;\n    cursor: pointer;\n  }\n\n  button:disabled {\n    background-color: #CFD8DC;\n    cursor: default;\n  }\n';