"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledPreloader = _interopRequireDefault(require("./StyledPreloader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/prop-types */

/* eslint-disable react/destructuring-assignment */
var withPrelaoder = function withPrelaoder(Element) {
  return function (props) {
    return _react["default"].createElement(_StyledPreloader["default"], props, _react["default"].createElement(Element, {
      className: props.className
    }));
  };
};

var _default = withPrelaoder;
exports["default"] = _default;