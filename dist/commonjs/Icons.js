'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  fill: currentColor;\n'], ['\n  fill: currentColor;\n']);

exports.SvgIconWrapper = SvgIconWrapper;
exports.IconLeft = IconLeft;
exports.IconMore = IconMore;
exports.IconRight = IconRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Path = _styledComponents2.default.path(_templateObject);

function SvgIconWrapper(_ref) {
  var children = _ref.children;

  var rest = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    'svg',
    _extends({
      height: 24,
      preserveAspectRatio: 'xMinYMax meet',
      viewBox: '0 0 24 24',
      width: 24
    }, rest),
    _react2.default.createElement('path', { d: 'M0-.5h24v24H0z', fill: 'none' }),
    children
  );
}

function IconLeft() {
  return _react2.default.createElement(
    SvgIconWrapper,
    null,
    _react2.default.createElement(Path, { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' })
  );
}

function IconMore() {
  return _react2.default.createElement(
    SvgIconWrapper,
    null,
    _react2.default.createElement(Path, { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
  );
}

function IconRight() {
  return _react2.default.createElement(
    SvgIconWrapper,
    null,
    _react2.default.createElement(Path, { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' })
  );
}