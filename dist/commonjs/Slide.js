'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _styledComponents = require('styled-components');

var _PropTypes = require('./PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slide = function (_Component) {
  _inherits(Slide, _Component);

  function Slide(props, context) {
    _classCallCheck(this, Slide);

    var _this = _possibleConstructorReturn(this, (Slide.__proto__ || Object.getPrototypeOf(Slide)).call(this, props, context));

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
      return _react2.default.createElement(_reactRouter.Match, {
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
        rendered = _react2.default.createElement(Component, {
          isPresenterMode: isPresenterMode,
          slideIndex: slideIndex,
          stepIndex: stepIndex
        });
      }

      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: { isPresenterMode: isPresenterMode } },
        rendered
      );
    }
  }]);

  return Slide;
}(_react.Component);

Slide.childContextTypes = {
  slide: _PropTypes.slideContext.isRequired
};
Slide.contextTypes = {
  pluginProps: _react.PropTypes.object.isRequired,
  presentation: _PropTypes.presentationContext.isRequired
};
exports.default = Slide;
process.env.NODE_ENV !== "production" ? Slide.propTypes = {
  component: _react.PropTypes.any,
  render: _react.PropTypes.any
} : void 0;