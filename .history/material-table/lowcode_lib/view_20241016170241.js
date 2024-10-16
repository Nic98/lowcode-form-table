"use strict";

exports.__esModule = true;
var _exportNames = {};
exports["default"] = void 0;
var componentInstances = _interopRequireWildcard(require("F:/Mywebsites/lowcode-form-table/material-table/src/index"));
Object.keys(componentInstances).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === componentInstances[key]) return;
  exports[key] = componentInstances[key];
});
require("F:/Mywebsites/lowcode-form-table/material-table/src/index.scss");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var entryDefault = exports["default"] = componentInstances["default"];
var coveredComponents = {};
var library = 'BizComp';
var execCompile = !!true;
if (!execCompile) {
  window[library] = Object.assign({
    __esModule: true
  }, componentInstances || {}, coveredComponents || {});
}
function getRealComponent(component, componentName) {
  if (component["default"]) return component["default"];
  if (component[componentName]) return component[componentName];
  return component;
}