'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n\n  @media (max-width: 600px) {\n    top: 0.5rem;\n    right: 0.5rem;\n  }\n'], ['\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n\n  @media (max-width: 600px) {\n    top: 0.5rem;\n    right: 0.5rem;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _IconButton = require('./IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Icons = require('./Icons');

var _PropTypes = require('./PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ButtonGroup = _styledComponents2.default.div(_templateObject);

var TouchNav = function (_Component) {
  _inherits(TouchNav, _Component);

  function TouchNav() {
    _classCallCheck(this, TouchNav);

    return _possibleConstructorReturn(this, (TouchNav.__proto__ || Object.getPrototypeOf(TouchNav)).apply(this, arguments));
  }

  _createClass(TouchNav, [{
    key: 'render',
    value: function render() {
      var presentation = this.context.presentation;


      return _react2.default.createElement(
        ButtonGroup,
        null,
        _react2.default.createElement(
          _IconButton2.default,
          {
            disabled: presentation.isAtBeginning(),
            onClick: presentation.goBack
          },
          _react2.default.createElement(_Icons.IconLeft, null)
        ),
        _react2.default.createElement(
          _IconButton2.default,
          {
            disabled: presentation.isAtEnd(),
            onClick: presentation.goForward
          },
          _react2.default.createElement(_Icons.IconRight, null)
        )
      );
    }
  }]);

  return TouchNav;
}(_react.Component);

TouchNav.contextTypes = {
  presentation: _PropTypes.presentationContext.isRequired
};
exports.default = TouchNav;