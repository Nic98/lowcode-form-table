import * as React from 'react';
import { useState, forwardRef, ForwardRefRenderFunction } from 'react';
import type { FormInstance, FormProps } from 'antd';
import { Button, Form, Input } from 'antd';


interface ComponentProps {
  title: string;
  content: string;
  listType?: string;
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
  const { title, content, listType, ...others } = props;

  const [name, setName] = useState('');
  const [id, setId] = useState('');

  return (
    <div className="lowcode-spa-queryform">
      <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ marginTop:20, maxWidth: 500, display: 'flex', flexDirection: 'row' }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          ref={ref}
          {...others}
        >
          <Form.Item
            label="Name"
            name="name"
          >
            <Input
              onChange={(v:any) => {
                setName(v.target.value);
              }} />
          </Form.Item>

          <Form.Item
            label="ID"
            name="id"
          >
            <Input
              onChange={(v: any) => {
              setName(v.target.value);
              }}
            />
          </Form.Item>
          
        
          {}
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
      </Form>
    </div>

  );
};

const RefExampleComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);
RefExampleComponent.displayName = 'ExampleComponent';

export default RefExampleComponent;
