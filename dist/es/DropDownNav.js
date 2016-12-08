import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 1rem;\n  right: 7rem;\n\n  @media (max-width: 600px) {\n    top: 0.5rem;\n    right: 6.5rem;\n  }\n'], ['\n  position: absolute;\n  top: 1rem;\n  right: 7rem;\n\n  @media (max-width: 600px) {\n    top: 0.5rem;\n    right: 6.5rem;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, .5);\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, .5);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(255, 255, 255, .1);\n  padding: 1rem;\n  border-radius: 0.5rem;\n  z-index: 2;\n\n  .VirtualizedSelect {\n    width: 250px;\n    max-width: 100%;\n  }\n'], ['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(255, 255, 255, .1);\n  padding: 1rem;\n  border-radius: 0.5rem;\n  z-index: 2;\n\n  .VirtualizedSelect {\n    width: 250px;\n    max-width: 100%;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  white-space: pre;\n  overflow: hidden;\n  text-overflow: ellipsis;\n'], ['\n  white-space: pre;\n  overflow: hidden;\n  text-overflow: ellipsis;\n']);

import React, { Component, PropTypes } from 'react';
import Select from 'react-virtualized-select';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import IconButton from './IconButton';
import { IconMore } from './Icons';
import { presentationContext } from './PropTypes';
import './reactSelectStyles';

// @TODO Maybe register with Presentation and include via TouchNav?
var ButtonGroup = styled.div(_templateObject);

var Overlay = styled.div(_templateObject2);

var SelectWrapper = styled.div(_templateObject3);

var Row = styled.div(_templateObject4);

var NavigateToSlide = function (_Component) {
  _inherits(NavigateToSlide, _Component);

  function NavigateToSlide(props, context) {
    _classCallCheck(this, NavigateToSlide);

    var _this = _possibleConstructorReturn(this, (NavigateToSlide.__proto__ || _Object$getPrototypeOf(NavigateToSlide)).call(this, props, context));

    _this.state = {
      active: false
    };

    _this._onChange = _this._onChange.bind(_this);
    _this._onClick = _this._onClick.bind(_this);
    _this._onKeyDown = _this._onKeyDown.bind(_this);
    _this._optionRenderer = _this._optionRenderer.bind(_this);
    return _this;
  }

  _createClass(NavigateToSlide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('click', this._onClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('click', this._onClick);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var slideIndex = this.context.slideIndex;
      var options = this.props.options;
      var active = this.state.active;


      if (active) {
        return React.createElement(
          Overlay,
          null,
          React.createElement(
            SelectWrapper,
            null,
            React.createElement(Select, {
              autofocus: true,
              className: 'VirtualizedSelect',
              clearable: false,
              options: options,
              onChange: this._onChange,
              onInputKeyDown: this._onKeyDown,
              optionHeight: 35,
              optionRenderer: this._optionRenderer,
              ref: function ref(_ref) {
                _this2._select = _ref;
              },
              value: slideIndex
            })
          )
        );
      } else if (options.length) {
        return React.createElement(
          ButtonGroup,
          null,
          React.createElement(
            IconButton,
            { onClick: function onClick() {
                return _this2.setState({ active: true });
              } },
            React.createElement(IconMore, null)
          )
        );
      } else {
        return null;
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(option) {
      var slideIndex = option.value;

      var presentation = this.context.presentation;


      this.setState({
        active: false
      });

      presentation.goToSlide({ slideIndex: slideIndex });
    }
  }, {
    key: '_onClick',
    value: function _onClick(event) {
      var active = this.state.active;


      if (!active) {
        return;
      }

      var select = findDOMNode(this._select);

      if (select === event.target || select.contains(event.target)) {
        return;
      }

      this.setState({
        active: false
      });
    }
  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      switch (event.key) {
        case 'Escape':
          this.setState({
            active: false
          });
          break;
      }
    }
  }, {
    key: '_optionRenderer',
    value: function _optionRenderer(_ref2) {
      var focusedOption = _ref2.focusedOption;
      var focusOption = _ref2.focusOption;
      var key = _ref2.key;
      var labelKey = _ref2.labelKey;
      var option = _ref2.option;
      var selectValue = _ref2.selectValue;
      var style = _ref2.style;

      var classNames = ['VirtualizedSelectOption'];
      if (option === focusedOption) {
        classNames.push('VirtualizedSelectFocusedOption');
      }
      if (option.disabled) {
        classNames.push('VirtualizedSelectOptionHeader');
      }

      var text = option[labelKey];

      var events = option.disabled ? {} : {
        onClick: function onClick() {
          return selectValue(option);
        },
        onMouseOver: function onMouseOver() {
          return focusOption(option);
        }
      };

      return React.createElement(
        'div',
        _extends({
          className: classNames.join(' '),
          key: key,
          style: style,
          title: text
        }, events),
        React.createElement(
          Row,
          null,
          text
        )
      );
    }
  }]);

  return NavigateToSlide;
}(Component);

NavigateToSlide.contextTypes = {
  presentation: presentationContext.isRequired
};
export default NavigateToSlide;
process.env.NODE_ENV !== "production" ? NavigateToSlide.propTypes = {
  options: PropTypes.array.isRequired
} : void 0;