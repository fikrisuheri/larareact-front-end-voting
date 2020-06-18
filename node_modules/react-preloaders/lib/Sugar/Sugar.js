"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Preloader = require("../Preloader");

var _SugarStyles = _interopRequireDefault(require("./SugarStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Sugar = function Sugar(_ref) {
  var className = _ref.className;
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("span", null));
};

Sugar.propTypes = {
  className: _propTypes["default"].string
};
var StyledSugar = (0, _styledComponents["default"])(Sugar)(_templateObject(), _SugarStyles["default"]);

var _default = (0, _Preloader.withPreloader)(StyledSugar);

exports["default"] = _default;