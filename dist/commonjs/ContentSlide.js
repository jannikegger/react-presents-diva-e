'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: 100%;\n  padding: 1rem;\n\n  ', '\n\n  @media (max-width: 600px) {\n    padding: 0.5rem;\n  }\n\n  h1 {\n    paddingRight: 9rem;\n  }\n'], ['\n  height: 100%;\n  padding: 1rem;\n\n  ', '\n\n  @media (max-width: 600px) {\n    padding: 0.5rem;\n  }\n\n  h1 {\n    paddingRight: 9rem;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _presenterSlideStyle = require('./presenterSlideStyle');

var _presenterSlideStyle2 = _interopRequireDefault(_presenterSlideStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.div(_templateObject, _presenterSlideStyle2.default);