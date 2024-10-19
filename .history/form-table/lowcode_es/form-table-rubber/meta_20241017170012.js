import _extends from "@babel/runtime/helpers/extends";
var FormTableRubberMeta = {
  "componentName": "FormTableRubber",
  "title": "FormTable",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "form-table-rubber",
    "version": "0.1.4",
    "exportName": "default",
    "main": "src\\index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [{
      "title": {
        "label": {
          "type": "i18n",
          "en-US": "API",
          "zh-CN": "接口"
        }
      },
      "name": "api",
      "setter": {
        "componentName": "StringSetter",
        "isRequired": true,
        "initialValue": "proapi.azurewebsites.net/api/rule?token%20=%20123&current=1&pageSize=100"
      }
    }, {
      title: {
        label: {
          type: "i18n",
          "en-US": "List Type",
          "zh-CN": "列表类型"
        }
      },
      name: "type",
      setter: {
        componentName: "SelectSetter",
        props: {
          mode: "single",
          options: [{
            label: 'Table Form',
            value: 'tableForm'
          }, {
            label: 'List Form',
            value: 'listForm'
          }],
          defaultvValue: "tableForm"
        },
        initialValue: "tableForm"
      }
    }],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
var snippets = [{
  "title": "FormTableRubber",
  "screenshot": "",
  "schema": {
    "componentName": "FormTableRubber",
    "props": {}
  }
}];
export default _extends({}, FormTableRubberMeta, {
  snippets: snippets
});