"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeAnimation = exports.slideAnimation = void 0;

var slideAnimation = function slideAnimation(_ref) {
  var animation = _ref.animation,
      loadingStatus = _ref.loadingStatus;

  if (animation.name === 'slide') {
    if (animation.direction) {
      if (animation.direction === 'up' || animation.direction === 'down') {
        return "top: ".concat(loadingStatus ? 0 : "".concat(animation.direction === 'up' ? '-100%' : '100%'), ";\n     transition: 0.5s;");
      }

      return "left: ".concat(loadingStatus ? 0 : "".concat(animation.direction === 'right' ? '100%' : '-101%'), ";\n              top: 0;\n              transition: 0.5s;");
    }

    return "top: ".concat(loadingStatus ? 0 : '-100%', ";\n            transition: 0.5s;");
  }

  return "top: 0; \n          left: 0;";
};

exports.slideAnimation = slideAnimation;

var fadeAnimation = function fadeAnimation(props) {
  return props.animation.name === 'fade' && " opacity: ".concat(props.loadingStatus ? 1 : 0, ";\n       visibility: ").concat(props.loadingStatus ? 'visible' : 'hidden', ";\n       transition: opacity 0.3s linear, visibility 0.2s linear 0.3s;");
};

exports.fadeAnimation = fadeAnimation;