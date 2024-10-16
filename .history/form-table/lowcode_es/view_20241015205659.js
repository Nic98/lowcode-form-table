import * as componentInstances from 'F:/Mywebsites/lowcode-form-table/form-table/src/index';
import 'F:/Mywebsites/lowcode-form-table/form-table/src/index.scss';
var entryDefault = componentInstances["default"];
export { entryDefault as default };
export * from 'F:/Mywebsites/lowcode-form-table/form-table/src/index';
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