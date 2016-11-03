/**
 * Redux dispatch multiple actions
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function multi(_ref) {
  var dispatch = _ref.dispatch;

  return function (next) {
    return function (action) {
      return Array.isArray(action) ? Promise.all(action.filter(Boolean).map(function (p) {
        return dispatch(p);
      })) : next(action);
    };
  };
}

/**
 * Exports
 */

exports["default"] = multi;
module.exports = exports["default"];