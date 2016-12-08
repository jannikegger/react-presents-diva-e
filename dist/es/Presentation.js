import _extends from 'babel-runtime/helpers/extends';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React, { Component, PropTypes } from 'react';
import { HashRouter, Match, Redirect } from 'react-router';
import DefaultTheme from './DefaultTheme';
import { presentationContext } from './PropTypes';
import TouchNav from './TouchNav';

var Presentation = function (_Component) {
  _inherits(Presentation, _Component);

  function Presentation(props, context) {
    _classCallCheck(this, Presentation);

    var _this = _possibleConstructorReturn(this, (Presentation.__proto__ || _Object$getPrototypeOf(Presentation)).call(this, props, context));

    _this.state = {
      pluginProps: {}
    };

    _this._index = 0;
    _this._slideIndex = 0;
    _this._slideIndexMap = {};
    _this._stepIndex = 0;

    _this.getSlideIndex = _this.getSlideIndex.bind(_this);
    _this.getSlideMetadata = _this.getSlideMetadata.bind(_this);
    _this.getStepIndex = _this.getStepIndex.bind(_this);
    _this.goBack = _this.goBack.bind(_this);
    _this.goForward = _this.goForward.bind(_this);
    _this.goToSlide = _this.goToSlide.bind(_this);
    _this.setPluginProps = _this.setPluginProps.bind(_this);
    _this._onKeyDown = _this._onKeyDown.bind(_this);
    return _this;
  }

  _createClass(Presentation, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('keydown', this._onKeyDown);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('keydown', this._onKeyDown);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var pluginProps = this.state.pluginProps;


      return {
        pluginProps: pluginProps,
        presentation: this
      };
    }
  }, {
    key: 'getSlideIndex',
    value: function getSlideIndex() {
      return this._slideIndex;
    }
  }, {
    key: 'getSlideMetadata',
    value: function getSlideMetadata(slide) {
      var slideIndex = this._index;

      this._slideIndexMap[slideIndex] = slide;
      this._index++;

      var pattern = this._createPath({ slideIndex: slideIndex });

      return {
        pattern: pattern,
        slideIndex: slideIndex
      };
    }
  }, {
    key: 'getStepIndex',
    value: function getStepIndex() {
      return this._stepIndex;
    }
  }, {
    key: 'goBack',
    value: function goBack() {
      var slideIndex = this._slideIndex;
      var stepIndex = this._stepIndex;

      if (stepIndex > 0) {
        this.goToSlide({
          slideIndex: slideIndex,
          stepIndex: stepIndex - 1
        });
      } else if (slideIndex > 0) {
        slideIndex--;

        // Ensure this slide has been processed at least once so we can accurately access the step-count
        this.goToSlide({
          slideIndex: slideIndex
        });

        stepIndex = this._getNumStepsForSlide(slideIndex) - 1;

        this.goToSlide({
          slideIndex: slideIndex,
          stepIndex: stepIndex
        });
      }
    }
  }, {
    key: 'goForward',
    value: function goForward() {
      var slideIndex = this._slideIndex;
      var stepIndex = this._stepIndex;

      var numCurrentSlideSteps = this._getNumStepsForSlide(slideIndex);
      var numSlides = _Object$keys(this._slideIndexMap).length;

      if (stepIndex + 1 < numCurrentSlideSteps) {
        stepIndex++;
      } else if (slideIndex + 1 < numSlides) {
        slideIndex++;
        stepIndex = 0;
      }

      this.goToSlide({ slideIndex: slideIndex, stepIndex: stepIndex });
    }
  }, {
    key: 'goToSlide',
    value: function goToSlide(_ref) {
      var slideIndex = _ref.slideIndex;
      var _ref$stepIndex = _ref.stepIndex;
      var stepIndex = _ref$stepIndex === undefined ? 0 : _ref$stepIndex;

      if (slideIndex !== this._slideIndex || stepIndex !== this._stepIndex) {
        var path = this._createPath({ slideIndex: slideIndex, stepIndex: stepIndex });

        this._router.replaceWith(path);
      }
    }
  }, {
    key: 'isAtBeginning',
    value: function isAtBeginning() {
      return this._slideIndex === 0 && this._stepIndex === 0;
    }
  }, {
    key: 'isAtEnd',
    value: function isAtEnd() {
      var numSlides = _Object$keys(this._slideIndexMap).length;
      var numLastSlideSteps = this._getNumStepsForSlide(numSlides - 1);

      return this._slideIndex === numSlides - 1 && this._stepIndex === numLastSlideSteps - 1;
    }
  }, {
    key: 'setPluginProps',
    value: function setPluginProps(props) {
      var pluginProps = this.state.pluginProps;


      this.setState({
        pluginProps: _extends({}, pluginProps, props)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var disableTheme = _props.disableTheme;
      var Router = _props.router;


      return React.createElement(
        Router,
        null,
        function (_ref2) {
          var location = _ref2.location;
          var router = _ref2.router;

          _this2._router = router;
          _this2._parseLocation(location);

          return React.createElement(
            'div',
            {
              style: {
                height: '100%',
                width: '100%'
              }
            },
            !disableTheme && React.createElement(DefaultTheme, null),
            React.createElement(Match, {
              exactly: true,
              pattern: '/',
              render: function render() {
                return React.createElement(Redirect, { to: '/0/0' });
              }
            }),
            typeof children === 'function' ? children({ presentation: _this2 }) : children,
            React.createElement(TouchNav, null)
          );
        }
      );
    }
  }, {
    key: '_createPath',
    value: function _createPath(_ref3) {
      var slideIndex = _ref3.slideIndex;
      var _ref3$stepIndex = _ref3.stepIndex;
      var stepIndex = _ref3$stepIndex === undefined ? ':step' : _ref3$stepIndex;

      return '/' + slideIndex + '/' + stepIndex;
    }
  }, {
    key: '_getNumStepsForSlide',
    value: function _getNumStepsForSlide(slideIndex) {
      return this._slideIndexMap[slideIndex].getNumSteps() || 1;
    }
  }, {
    key: '_parseLocation',
    value: function _parseLocation(location) {
      var parsed = location.pathname.match(/(\d+)\/(\d+)/);

      if (parsed) {
        this._slideIndex = parseInt(parsed[1], 10);
        this._stepIndex = parseInt(parsed[2], 10);
      } else {
        this._slideIndex = 0;
        this._stepIndex = 0;
      }
    }
  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      if (event.target.tagName === 'INPUT') {
        return;
      }

      switch (event.key) {
        case 'ArrowLeft':
          this.goBack();
          break;
        case 'ArrowRight':
          this.goForward();
          break;
        default:
          // Linting requires this :)
          break;
      }
    }
  }]);

  return Presentation;
}(Component);

Presentation.childContextTypes = {
  pluginProps: PropTypes.object.isRequired,
  presentation: presentationContext.isRequired
};
Presentation.defaultProps = {
  disableTheme: false,
  router: HashRouter
};
export default Presentation;
process.env.NODE_ENV !== "production" ? Presentation.propTypes = {
  children: PropTypes.any.isRequired,
  disableTheme: PropTypes.bool.isRequired,
  router: PropTypes.any.isRequired
} : void 0;