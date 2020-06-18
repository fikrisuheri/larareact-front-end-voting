"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _animations = require("./animations");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  z-index: 9999;\n  position: fixed;\n  ", "\n  ", "\n  height: 100vh;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PreloaderStyles = (0, _styledComponents.css)(_templateObject(), _animations.slideAnimation, _animations.fadeAnimation, function (props) {
  return props.background;
});
var _default = PreloaderStyles;
exports["default"] = _default;