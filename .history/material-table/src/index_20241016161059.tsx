import * as React from 'react';
import {useState, useEffect, forwardRef, ForwardRefRenderFunction } from 'react';

import {
  Input, Table, Divider, Badge, Modal
} from 'antd/es';
import _ from 'lodash';



interface ComponentProps {
  title: string;
  content: string;
}

const ExampleComponent = (props: ComponentProps, ref: any) => {
  const { title, content, ...others } = props;
  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
      key: 'key',
      show: true,
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      show: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      show: true,
    },
  ];
  const [filterparamList, setFilterparamList] = React.useState([]);
  React.useEffect(() => { 
    try {
      const paramList = localStorage.get("data");
      setFilterparamList(paramList);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  return (
      <Table
      columns={_.filter(columns, item => item.show !== false)}
      dataSource={_.uniqBy(filterparamList, 'key')}
      pagination={false}
      size="middle"
      scroll={{ y: 350 }}
      />
  );
};





const RefExampleComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);
RefExampleComponent.displayName = 'ExampleComponent';

export default RefExampleComponent;
