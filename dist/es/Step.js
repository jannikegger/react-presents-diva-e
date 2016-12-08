import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';
import { presentationContext, slideContext } from './PropTypes';

var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, (Step.__proto__ || _Object$getPrototypeOf(Step)).apply(this, arguments));
  }

  _createClass(Step, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var slide = this.context.slide;
      var _props = this.props;
      var index = _props.index;
      var maxIndex = _props.maxIndex;


      if (maxIndex < Infinity) {
        slide.registerStep(maxIndex);
      } else {
        slide.registerStep(index);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _context = this.context;
      var pluginProps = _context.pluginProps;
      var presentation = _context.presentation;
      var _props2 = this.props;
      var children = _props2.children;
      var exact = _props2.exact;
      var index = _props2.index;
      var maxIndex = _props2.maxIndex;
      var isPresenterMode = pluginProps.isPresenterMode;

      var stepIndex = presentation.getStepIndex();

      var match = void 0;

      if (exact) {
        match = stepIndex === index;
      } else {
        match = stepIndex >= index && stepIndex <= maxIndex;
      }

      if (match) {
        return children;
      } else if (isPresenterMode) {
        return React.createElement(
          'div',
          { style: { opacity: 0.35 } },
          children
        );
      } else {
        return null;
      }
    }
  }]);

  return Step;
}(Component);

Step.contextTypes = {
  pluginProps: PropTypes.object.isRequired,
  presentation: presentationContext.isRequired,
  slide: slideContext.isRequired
};
Step.defaultProps = {
  maxIndex: Infinity
};
export default Step;
process.env.NODE_ENV !== "production" ? Step.propTypes = {
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  index: PropTypes.number.isRequired,
  maxIndex: PropTypes.number.isRequired
} : void 0;