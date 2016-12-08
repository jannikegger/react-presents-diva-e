'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  width: 2.5rem;\n  height: 2.5rem;\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.5rem;\n  padding: 0;\n  background-color: rgba(249, 38, 114, 0.75);\n  color: #fff;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);\n  transition: 250ms all ease;\n\n  &:hover {\n    background-color: rgb(249, 38, 114);\n  }\n\n  &:disabled {\n    background-color: rgba(249, 38, 114, 0.25);\n  }\n'], ['\n  width: 2.5rem;\n  height: 2.5rem;\n  display: inline-flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-left: 0.5rem;\n  padding: 0;\n  background-color: rgba(249, 38, 114, 0.75);\n  color: #fff;\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);\n  transition: 250ms all ease;\n\n  &:hover {\n    background-color: rgb(249, 38, 114);\n  }\n\n  &:disabled {\n    background-color: rgba(249, 38, 114, 0.25);\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.button(_templateObject);