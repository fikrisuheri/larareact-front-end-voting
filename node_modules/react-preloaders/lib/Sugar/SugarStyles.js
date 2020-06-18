"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  span {\n    position: relative;\n  }\n  span:before,\n  span:after {\n    content: '';\n    position: relative;\n    display: block;\n  }\n  span:before {\n    animation: ", " 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n    width: 50px;\n    height: 50px;\n    background-color: ", ";\n  }\n  span:after {\n    animation: ", " 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n    bottom: -30px;\n    height: 5px;\n    border-radius: 50%;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n50% {\n  transform: scale(0.5);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n50% {\n  border-radius: 50%;\n  transform: scale(0.5) rotate(360deg);\n}\n100% {\n  transform: scale(1) rotate(720deg);\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var spinner = (0, _styledComponents.keyframes)(_templateObject());
var shadow = (0, _styledComponents.keyframes)(_templateObject2());
var SugarStyles = (0, _styledComponents.css)(_templateObject3(), spinner, function (_ref) {
  var color = _ref.color;
  return color;
}, shadow);
var _default = SugarStyles;
exports["default"] = _default;