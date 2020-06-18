"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _PreloaderStyles = _interopRequireDefault(require("./PreloaderStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledPreloader = _styledComponents["default"].div(_templateObject(), _PreloaderStyles["default"]);

function Preloader(_ref) {
  var children = _ref.children,
      background = _ref.background,
      color = _ref.color,
      time = _ref.time,
      customLoading = _ref.customLoading,
      animation = _ref.animation;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var childrenWithProp = _react["default"].Children.map(children, function (child) {
    return _react["default"].cloneElement(child, {
      color: color
    });
  });

  var bodyScroll = function bodyScroll() {
    document.body.style.overflow = loading ? 'hidden' : null;
    document.body.style.height = loading ? '100%' : null;
    document.body.style.width = loading ? '100%' : null;
    document.body.style.position = loading ? 'fixed' : null;
  };

  var generateAnimation = function generateAnimation() {
    var animate = animation && animation.split('-');
    return {
      name: animate && animate[0],
      direction: animate && animate[1]
    };
  };

  var detectBg = function detectBg() {
    if (background === 'blur') {
      return 'rgba(94, 85, 85, 0.32941176470588235)';
    }

    return background;
  };

  bodyScroll();
  (0, _react.useEffect)(function () {
    if (customLoading === false) {
      setTimeout(function () {
        setLoading(false);
      }, time);
    }

    if (customLoading === undefined) {
      document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
          setTimeout(function () {
            setLoading(false);
          }, time);
        }
      };
    }
  }, [customLoading]);
  (0, _react.useEffect)(function () {
    if (background === 'blur') {
      var nodes = Object.values(document.getElementById('preloader').parentNode.childNodes).filter(function (i) {
        return i.id !== 'preloader';
      });
      nodes.forEach(function (el) {
        // eslint-disable-next-line no-param-reassign
        el.style.filter = loading ? 'blur(5px)' : 'blur(0px)';
      });
    }
  }, [loading]);
  return _react["default"].createElement(StyledPreloader, {
    animation: generateAnimation(),
    background: detectBg(),
    loadingStatus: loading,
    id: "preloader"
  }, childrenWithProp);
}

Preloader.propTypes = {
  time: _propTypes["default"].number,
  background: _propTypes["default"].string,
  color: _propTypes["default"].string,
  animation: _propTypes["default"].string,
  children: _propTypes["default"].element,
  customLoading: _propTypes["default"].bool
};
Preloader.defaultProps = {
  time: 1300,
  background: '#f7f7f7',
  color: '#2D2D2D',
  animation: 'fade'
};
var _default = Preloader;
exports["default"] = _default;