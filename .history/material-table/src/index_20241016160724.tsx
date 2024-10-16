import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  Input, Table, Divider, Badge, Modal
} from 'antd/es';




interface ComponentProps {
  title: string;
  content: string;
}

const ExampleComponent = (props: ComponentProps, ref: any) => {
  const { title, content, ...others } = props;

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
