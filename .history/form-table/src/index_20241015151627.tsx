import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import type { FormInstance, FormProps } from 'antd';
import { Button, Form, Input } from 'antd';


interface ComponentProps {
  title: string;
  content: string;
}

type FieldType = {
  username?: string;
  password?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values:any) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo:any) => {
  console.log('Failed:', errorInfo);
};

const ExampleComponent = (props: ComponentProps, ref: any) => {
  const { title, content, ...others } = props;

  return (
    <div>
      
    </div>
  );
};

const RefExampleComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);
RefExampleComponent.displayName = 'ExampleComponent';

export default RefExampleComponent;
