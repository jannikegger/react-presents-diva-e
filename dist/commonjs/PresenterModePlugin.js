'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cuid = require('cuid');

var _cuid2 = _interopRequireDefault(_cuid);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _react = require('react');

var _PropTypes = require('./PropTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parentWindowID = (0, _cuid2.default)();

var PresenterModePlugin = function (_Component) {
  _inherits(PresenterModePlugin, _Component);

  function PresenterModePlugin(props, context) {
    _classCallCheck(this, PresenterModePlugin);

    // Parent of presenter window; null if not presenter window
    var _this = _possibleConstructorReturn(this, (PresenterModePlugin.__proto__ || Object.getPrototypeOf(PresenterModePlugin)).call(this, props, context));

    _this._parentWindowID = null;

    // Handle to other window containing presenter notes; null if presenter window
    _this._presenterWindow = null;

    _this._onKeyDown = _this._onKeyDown.bind(_this);
    _this._signalParent = _this._signalParent.bind(_this);
    _this._togglePresenterMode = _this._togglePresenterMode.bind(_this);
    return _this;
  }

  _createClass(PresenterModePlugin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('keydown', this._onKeyDown);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var presentation = this.context.presentation;

      // Detect if we are the presenter window or a original

      this._parentWindowID = _qs2.default.parse(window.location.search.slice(1)).parentWindowID;

      presentation.setPluginProps({
        isPresenterMode: !!this._parentWindowID
      });

      var callback = function callback(_ref) {
        var slideIndex = _ref.slideIndex;
        var stepIndex = _ref.stepIndex;

        presentation.goToSlide({ slideIndex: slideIndex, stepIndex: stepIndex });
      };

      // Expose the router to the alternate window
      if (!this._parentWindowID && !window[parentWindowID]) {
        window[parentWindowID] = callback;
      } else if (this._parentWindowID && !window[this._parentWindowID]) {
        window[this._parentWindowID] = callback;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('keydown', this._onKeyDown);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState, nextContext) {
      var presentation = this.context.presentation;


      var slideIndex = presentation.getSlideIndex();
      var stepIndex = presentation.getStepIndex();

      if (slideIndex !== this._slideIndex || stepIndex !== this._stepIndex) {
        this._slideIndex = slideIndex;
        this._stepIndex = stepIndex;

        if (this._parentWindowID) {
          this._signalParent({ slideIndex: slideIndex, stepIndex: stepIndex });
        } else if (this._presenterWindow) {
          this._syncPath({ slideIndex: slideIndex, stepIndex: stepIndex });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      if (event.target.tagName === 'INPUT') {
        return;
      }

      switch (event.key) {
        case 'p':
        case 'P':
          if (!this._parentWindowID) {
            this._togglePresenterMode();
          }
          break;
        default:
          // Linting requires this :)
          break;
      }
    }
  }, {
    key: '_signalParent',
    value: function _signalParent(path) {
      if (!window.opener) {
        return;
      }
      window.opener[this._parentWindowID](path);
    }
  }, {
    key: '_togglePresenterMode',
    value: function _togglePresenterMode(path) {
      if (this._presenterWindow) {
        this._presenterWindow.close();
        this._presenterWindow = null;
      } else {
        var url = new window.URL(window.location.href);

        // Inject the 'parentWindowID' query string
        url.search = '?' + _qs2.default.stringify(Object.assign(_qs2.default.parse(window.location.search.slice(1)), { parentWindowID: parentWindowID }));

        this._presenterWindow = window.open(url.toString(), 'react-presents-notes');
      }
    }
  }, {
    key: '_syncPath',
    value: function _syncPath(path) {
      if (this._presenterWindow && !this._presenterWindow.closed) {
        this._presenterWindow[parentWindowID](path);
      }
    }
  }]);

  return PresenterModePlugin;
}(_react.Component);

PresenterModePlugin.contextTypes = {
  presentation: _PropTypes.presentationContext.isRequired
};
exports.default = PresenterModePlugin;