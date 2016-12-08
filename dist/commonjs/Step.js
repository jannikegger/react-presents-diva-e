'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PropTypes = require('./PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Step = function (_Component) {
  _inherits(Step, _Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
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
        return _react2.default.createElement(
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
}(_react.Component);

Step.contextTypes = {
  pluginProps: _react.PropTypes.object.isRequired,
  presentation: _PropTypes.presentationContext.isRequired,
  slide: _PropTypes.slideContext.isRequired
};
Step.defaultProps = {
  maxIndex: Infinity
};
exports.default = Step;
process.env.NODE_ENV !== "production" ? Step.propTypes = {
  children: _react.PropTypes.node.isRequired,
  exact: _react.PropTypes.bool,
  index: _react.PropTypes.number.isRequired,
  maxIndex: _react.PropTypes.number.isRequired
} : void 0;