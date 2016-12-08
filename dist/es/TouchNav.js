import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n\n  @media (max-width: 600px) {\n    top: 0.5rem;\n    right: 0.5rem;\n  }\n'], ['\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n\n  @media (max-width: 600px) {\n    top: 0.5rem;\n    right: 0.5rem;\n  }\n']);

import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import { IconLeft, IconRight } from './Icons';
import { presentationContext } from './PropTypes';

var ButtonGroup = styled.div(_templateObject);

var TouchNav = function (_Component) {
  _inherits(TouchNav, _Component);

  function TouchNav() {
    _classCallCheck(this, TouchNav);

    return _possibleConstructorReturn(this, (TouchNav.__proto__ || _Object$getPrototypeOf(TouchNav)).apply(this, arguments));
  }

  _createClass(TouchNav, [{
    key: 'render',
    value: function render() {
      var presentation = this.context.presentation;


      return React.createElement(
        ButtonGroup,
        null,
        React.createElement(
          IconButton,
          {
            disabled: presentation.isAtBeginning(),
            onClick: presentation.goBack
          },
          React.createElement(IconLeft, null)
        ),
        React.createElement(
          IconButton,
          {
            disabled: presentation.isAtEnd(),
            onClick: presentation.goForward
          },
          React.createElement(IconRight, null)
        )
      );
    }
  }]);

  return TouchNav;
}(Component);

TouchNav.contextTypes = {
  presentation: presentationContext.isRequired
};
export default TouchNav;