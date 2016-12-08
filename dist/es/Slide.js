import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';
import { Match } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { presentationContext, slideContext } from './PropTypes';

var Slide = function (_Component) {
  _inherits(Slide, _Component);

  function Slide(props, context) {
    _classCallCheck(this, Slide);

    var _this = _possibleConstructorReturn(this, (Slide.__proto__ || _Object$getPrototypeOf(Slide)).call(this, props, context));

    _this._stepIndex = 0;

    _this._renderComponent = _this._renderComponent.bind(_this);
    return _this;
  }

  _createClass(Slide, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var presentation = this.context.presentation;

      var _presentation$getSlid = presentation.getSlideMetadata(this);

      var pattern = _presentation$getSlid.pattern;
      var slideIndex = _presentation$getSlid.slideIndex;


      this._pattern = pattern;
      this._slideIndex = slideIndex;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._stepIndex = 0;
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        slide: this
      };
    }
  }, {
    key: 'getNumSteps',
    value: function getNumSteps() {
      return this._numSteps || this._stepIndex + 1;
    }
  }, {
    key: 'registerStep',
    value: function registerStep(index) {
      this._stepIndex = Math.max(this._stepIndex, index);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(Match, {
        pattern: this._pattern,
        render: this._renderComponent
      });
    }
  }, {
    key: 'setNumSteps',
    value: function setNumSteps(numSteps) {
      this._numSteps = numSteps;
    }
  }, {
    key: '_renderComponent',
    value: function _renderComponent() {
      var _context = this.context;
      var pluginProps = _context.pluginProps;
      var presentation = _context.presentation;
      var _props = this.props;
      var Component = _props.component;
      var render = _props.render;
      var isPresenterMode = pluginProps.isPresenterMode;


      var slideIndex = this._slideIndex;
      var stepIndex = presentation.getStepIndex();

      var rendered = void 0;

      if (typeof render === 'function') {
        rendered = render({ isPresenterMode: isPresenterMode, slideIndex: slideIndex, stepIndex: stepIndex });
      } else {
        rendered = React.createElement(Component, {
          isPresenterMode: isPresenterMode,
          slideIndex: slideIndex,
          stepIndex: stepIndex
        });
      }

      return React.createElement(
        ThemeProvider,
        { theme: { isPresenterMode: isPresenterMode } },
        rendered
      );
    }
  }]);

  return Slide;
}(Component);

Slide.childContextTypes = {
  slide: slideContext.isRequired
};
Slide.contextTypes = {
  pluginProps: PropTypes.object.isRequired,
  presentation: presentationContext.isRequired
};
export default Slide;
process.env.NODE_ENV !== "production" ? Slide.propTypes = {
  component: PropTypes.any,
  render: PropTypes.any
} : void 0;