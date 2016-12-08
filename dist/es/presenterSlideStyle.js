export default (function (props) {
  return props.theme.isPresenterMode && "\n  outline: 0.25rem solid #37F;\n  outline-offset: -0.25rem;\n\n  &::before {\n    content: 'presenter';\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: #36F;\n    padding: 0.25rem;\n    color: #fff;\n    font-size: 0.65rem;\n  }\n";
});