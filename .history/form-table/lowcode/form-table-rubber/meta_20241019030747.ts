
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormTableRubberMeta: IPublicTypeComponentMetadata = {
  "componentName": "FormTableRubber",
  "title": "FormTableRubber",
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
    "props": [
      // {
      //   "title": {
      //     "label": {
      //       "type": "i18n",
      //       "en-US": "API",
      //       "zh-CN": "接口"
      //     }
      //   },
      //   "name": "api",
      //   "setter": {
      //     "componentName": "StringSetter",
      //     "isRequired": true,
      //     "initialValue": "proapi.azurewebsites.net/api/rule?token%20=%20123&current=1&pageSize=100"
      //   }
      // },
      {
        title: {
          label: {
            type: "i18n",
            "en-US": "Data Source",
            "zh-CN": "数据源"
          }
        },
        name: "dataSource",
        setter: {
          componentName: "StringSetter",
          initialValue: "data",
        }
      },
      {
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
            options: [
              {label: 'Table Form', value: 'tableForm'},
              {label: 'List Form', value: 'listForm'}],
            defaultvValue: "tableForm",
          },
          initialValue: "tableForm",
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "FormTableRubber",
    "screenshot": "",
    "schema": {
      "componentName": "FormTableRubber",
      "props": {}
    }
  }
];

export default {
  ...FormTableRubberMeta,
  snippets
};
