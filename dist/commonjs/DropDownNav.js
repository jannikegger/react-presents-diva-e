'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 1rem;\n  right: 7rem;\n\n  @media (max-width: 600px) {\n    top: 0.5rem;\n    right: 6.5rem;\n  }\n'], ['\n  position: absolute;\n  top: 1rem;\n  right: 7rem;\n\n  @media (max-width: 600px) {\n    top: 0.5rem;\n    right: 6.5rem;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, .5);\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, .5);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(255, 255, 255, .1);\n  padding: 1rem;\n  border-radius: 0.5rem;\n  z-index: 2;\n\n  .VirtualizedSelect {\n    width: 250px;\n    max-width: 100%;\n  }\n'], ['\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(255, 255, 255, .1);\n  padding: 1rem;\n  border-radius: 0.5rem;\n  z-index: 2;\n\n  .VirtualizedSelect {\n    width: 250px;\n    max-width: 100%;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  white-space: pre;\n  overflow: hidden;\n  text-overflow: ellipsis;\n'], ['\n  white-space: pre;\n  overflow: hidden;\n  text-overflow: ellipsis;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactVirtualizedSelect = require('react-virtualized-select');

var _reactVirtualizedSelect2 = _interopRequireDefault(_reactVirtualizedSelect);

var _reactDom = require('react-dom');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _IconButton = require('./IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Icons = require('./Icons');

var _PropTypes = require('./PropTypes');

require('./reactSelectStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// @TODO Maybe register with Presentation and include via TouchNav?
var ButtonGroup = _styledComponents2.default.div(_templateObject);

var Overlay = _styledComponents2.default.div(_templateObject2);

var SelectWrapper = _styledComponents2.default.div(_templateObject3);

var Row = _styledComponents2.default.div(_templateObject4);

var NavigateToSlide = function (_Component) {
  _inherits(NavigateToSlide, _Component);

  function NavigateToSlide(props, context) {
    _classCallCheck(this, NavigateToSlide);

    var _this = _possibleConstructorReturn(this, (NavigateToSlide.__proto__ || Object.getPrototypeOf(NavigateToSlide)).call(this, props, context));

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
        return _react2.default.createElement(
          Overlay,
          null,
          _react2.default.createElement(
            SelectWrapper,
            null,
            _react2.default.createElement(_reactVirtualizedSelect2.default, {
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
        return _react2.default.createElement(
          ButtonGroup,
          null,
          _react2.default.createElement(
            _IconButton2.default,
            { onClick: function onClick() {
                return _this2.setState({ active: true });
              } },
            _react2.default.createElement(_Icons.IconMore, null)
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

      var select = (0, _reactDom.findDOMNode)(this._select);

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

      return _react2.default.createElement(
        'div',
        _extends({
          className: classNames.join(' '),
          key: key,
          style: style,
          title: text
        }, events),
        _react2.default.createElement(
          Row,
          null,
          text
        )
      );
    }
  }]);

  return NavigateToSlide;
}(_react.Component);

NavigateToSlide.contextTypes = {
  presentation: _PropTypes.presentationContext.isRequired
};
exports.default = NavigateToSlide;
process.env.NODE_ENV !== "production" ? NavigateToSlide.propTypes = {
  options: _react.PropTypes.array.isRequired
} : void 0;