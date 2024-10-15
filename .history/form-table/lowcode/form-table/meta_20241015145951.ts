
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const FormTableMeta: IPublicTypeComponentMetadata = {
  "componentName": "FormTable",
  "title": "FormTable",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "form-table",
    "version": "0.1.0",
    "exportName": "default",
    "main": "src\\index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "名称",
            "zh-CN": "名称"
          }
        },
        // "name": "name",
        // "setter": {
        //   "componentName": "StringSetter",
        //   "isRequired": true,
        //   "initialValue": ""
        // }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "ID",
            "zh-CN": "ID"
          }
        },
        // "name": "ID",
        // "setter": {
        //   "componentName": "StringSetter",
        //   "isRequired": true,
        //   "initialValue": ""
        // }
      },
      
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "FormTable",
    "screenshot": "",
    "schema": {
      "componentName": "FormTable",
      "props": {}
    }
  }
];

export default {
  ...FormTableMeta,
  snippets
};
