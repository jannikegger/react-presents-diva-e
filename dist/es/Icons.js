import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _taggedTemplateLiteral from 'babel-runtime/helpers/taggedTemplateLiteral';

var _templateObject = _taggedTemplateLiteral(['\n  fill: currentColor;\n'], ['\n  fill: currentColor;\n']);

import React from 'react';
import styled from 'styled-components';

var Path = styled.path(_templateObject);

export function SvgIconWrapper(_ref) {
  var children = _ref.children;

  var rest = _objectWithoutProperties(_ref, ['children']);

  return React.createElement(
    'svg',
    _extends({
      height: 24,
      preserveAspectRatio: 'xMinYMax meet',
      viewBox: '0 0 24 24',
      width: 24
    }, rest),
    React.createElement('path', { d: 'M0-.5h24v24H0z', fill: 'none' }),
    children
  );
}

export function IconLeft() {
  return React.createElement(
    SvgIconWrapper,
    null,
    React.createElement(Path, { d: 'M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z' })
  );
}

export function IconMore() {
  return React.createElement(
    SvgIconWrapper,
    null,
    React.createElement(Path, { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
  );
}

export function IconRight() {
  return React.createElement(
    SvgIconWrapper,
    null,
    React.createElement(Path, { d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' })
  );
}