'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideContext = exports.presentationContext = undefined;

var _react = require('react');

var presentationContext = exports.presentationContext = _react.PropTypes.shape({
  getSlideIndex: _react.PropTypes.func.isRequired,
  getSlideMetadata: _react.PropTypes.func.isRequired,
  getStepIndex: _react.PropTypes.func.isRequired,
  goBack: _react.PropTypes.func.isRequired,
  goForward: _react.PropTypes.func.isRequired,
  goToSlide: _react.PropTypes.func.isRequired,
  isAtBeginning: _react.PropTypes.func.isRequired,
  isAtEnd: _react.PropTypes.func.isRequired,
  setPluginProps: _react.PropTypes.func.isRequired
});

var slideContext = exports.slideContext = _react.PropTypes.shape({
  getNumSteps: _react.PropTypes.func.isRequired,
  registerStep: _react.PropTypes.func.isRequired,
  setNumSteps: _react.PropTypes.func.isRequired
});