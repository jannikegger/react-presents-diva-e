import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';
import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import _extends from 'babel-runtime/helpers/extends';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _templateObject = _taggedTemplateLiteral(['\n.cm-s-reactpresents.CodeMirror {\n  height: auto;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  background-color: #222 !important;\n  color: #f8f8f2 !important;\n  font-size: 12px;\n  border: none;\n}\n\n.cm-s-reactpresents.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(255, 255, 255, 0.10);\n}\n\n.cm-s-reactpresents {\n  .CodeMirror-sizer {\n    min-height: auto !important;\n  }\n\n  .CodeMirror-gutters {\n    background-color: #222 !important;\n    color: #f8f8f2 !important;\n    font-size: 12px;\n    border: none;\n  }\n  .CodeMirror-gutters { color: #222; }\n  .CodeMirror-cursor { border-left: solid thin #ddd; }\n  .CodeMirror-linenumber { cololibr: #75715e; }\n  .CodeMirror-line::selection,\n  .CodeMirror-line > span::selection,\n  .CodeMirror-line > span > span::selection {\n    background: rgba(255, 255, 255, 0.10);\n  }\n  .CodeMirror-line::-moz-selection,\n  .CodeMirror-line > span::-moz-selection,\n  .CodeMirror-line > span > span::-moz-selection {\n    background: rgba(255, 255, 255, 0.10);\n  }\n  span.cm-comment { color: #75715e; }\n  span.cm-string,\n  span.cm-string-2 { color: #f1fa8c; }\n  span.cm-number { color: #bd93f9; }\n  span.cm-variable { color: #ddd; }\n  span.cm-variable-2 { color: white; }\n  span.cm-def { color: #a6e22e; }\n  span.cm-keyword { color: #f92672; }\n  span.cm-operator { color: #f92672; }\n  span.cm-keyword { color: #f92672; }\n  span.cm-atom { color: #bd93f9; }\n  span.cm-meta { color: #f8f8f2; }\n  span.cm-tag { color: #f92672; }\n  span.cm-attribute { color: #ddd; }\n  span.cm-qualifier { color: #a6e22e; }\n  span.cm-property { color: #66d9ef; }\n  span.cm-builtin { color: #a6e22e; }\n  span.cm-variable-3 { color: #a6e22e; }\n\n  .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n  .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n\n  span.cm-bracket { color: #900; }\n\n  span.dim {\n    opacity: 0.5;\n    filter: grayscale(100%);\n    -webkit-filter: grayscale(100%);\n  }\n\n  span.highlight {\n    background-color: rgba(189,147,249, .2);\n  }\n}\n'], ['\n.cm-s-reactpresents.CodeMirror {\n  height: auto;\n  border-radius: 0.5rem;\n  padding: 1rem;\n  background-color: #222 !important;\n  color: #f8f8f2 !important;\n  font-size: 12px;\n  border: none;\n}\n\n.cm-s-reactpresents.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(255, 255, 255, 0.10);\n}\n\n.cm-s-reactpresents {\n  .CodeMirror-sizer {\n    min-height: auto !important;\n  }\n\n  .CodeMirror-gutters {\n    background-color: #222 !important;\n    color: #f8f8f2 !important;\n    font-size: 12px;\n    border: none;\n  }\n  .CodeMirror-gutters { color: #222; }\n  .CodeMirror-cursor { border-left: solid thin #ddd; }\n  .CodeMirror-linenumber { cololibr: #75715e; }\n  .CodeMirror-line::selection,\n  .CodeMirror-line > span::selection,\n  .CodeMirror-line > span > span::selection {\n    background: rgba(255, 255, 255, 0.10);\n  }\n  .CodeMirror-line::-moz-selection,\n  .CodeMirror-line > span::-moz-selection,\n  .CodeMirror-line > span > span::-moz-selection {\n    background: rgba(255, 255, 255, 0.10);\n  }\n  span.cm-comment { color: #75715e; }\n  span.cm-string,\n  span.cm-string-2 { color: #f1fa8c; }\n  span.cm-number { color: #bd93f9; }\n  span.cm-variable { color: #ddd; }\n  span.cm-variable-2 { color: white; }\n  span.cm-def { color: #a6e22e; }\n  span.cm-keyword { color: #f92672; }\n  span.cm-operator { color: #f92672; }\n  span.cm-keyword { color: #f92672; }\n  span.cm-atom { color: #bd93f9; }\n  span.cm-meta { color: #f8f8f2; }\n  span.cm-tag { color: #f92672; }\n  span.cm-attribute { color: #ddd; }\n  span.cm-qualifier { color: #a6e22e; }\n  span.cm-property { color: #66d9ef; }\n  span.cm-builtin { color: #a6e22e; }\n  span.cm-variable-3 { color: #a6e22e; }\n\n  .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n  .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n\n  span.cm-bracket { color: #900; }\n\n  span.dim {\n    opacity: 0.5;\n    filter: grayscale(100%);\n    -webkit-filter: grayscale(100%);\n  }\n\n  span.highlight {\n    background-color: rgba(189,147,249, .2);\n  }\n}\n']);

import React, { Component, PropTypes } from 'react';
import CodeMirror from 'react-codemirror';
import styled from 'styled-components';

// By default, highlight JSX
import 'codemirror/mode/jsx/jsx';

var DEFAULT_CODE_MIRROR_OPTIONS = {
  lineNumbers: false,
  mode: 'jsx',
  readOnly: true,
  theme: 'reactpresents'
};

var Code = function (_Component) {
  _inherits(Code, _Component);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || _Object$getPrototypeOf(Code)).apply(this, arguments));
  }

  _createClass(Code, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var dimLines = _props.dimLines;
      var highlightLines = _props.highlightLines;


      this._textMarks = [];
      this._addClassNameToLines(dimLines, 'dim');
      this._addClassNameToLines(highlightLines, 'highlight');
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var _props2 = this.props;
      var dimLines = _props2.dimLines;
      var highlightLines = _props2.highlightLines;


      if (dimLines !== nextProps.dimLines || highlightLines !== nextProps.highlightLines) {
        this._textMarks.forEach(function (textMark) {
          textMark.clear();
        });

        this._textMarks = [];
        this._addClassNameToLines(nextProps.dimLines, 'dim');
        this._addClassNameToLines(nextProps.highlightLines, 'highlight');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props;
      var codeMirrorOptions = _props3.codeMirrorOptions;
      var value = _props3.value;
      var className = _props3.className;


      var options = _extends({}, DEFAULT_CODE_MIRROR_OPTIONS, codeMirrorOptions);

      return React.createElement(
        CodeMirrorTheme,
        { className: className },
        React.createElement(CodeMirror, {
          options: options,
          ref: function ref(_ref) {
            _this2._codeMirror = _ref;
          },
          value: value
        })
      );
    }
  }, {
    key: '_addClassNameToLines',
    value: function _addClassNameToLines(lineNumbers, className) {
      var _this3 = this;

      lineNumbers.forEach(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2);

        var start = _ref3[0];
        var stop = _ref3[1];

        _this3._textMarks.push(_this3._codeMirror.codeMirror.doc.markText({ line: start, ch: 0 }, { line: stop + 1, ch: 0 }, { className: className }));
      });
    }
  }]);

  return Code;
}(Component);

Code.defaultProps = {
  codeMirrorOptions: {},
  dimLines: [],
  highlightLines: []
};
export default Code;
process.env.NODE_ENV !== "production" ? Code.propTypes = {
  className: PropTypes.object,
  codeMirrorOptions: PropTypes.object.isRequired,
  dimLines: PropTypes.array.isRequired,
  highlightLines: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired
} : void 0;


var CodeMirrorTheme = styled.div(_templateObject);