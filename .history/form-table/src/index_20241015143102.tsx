import * as React from 'react';
import { forwardRef } from 'react';
import type { FormProps } from 'antd';
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

const ExampleComponent = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
  // const { title, content, ...others } = props;

  return (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ marginTop:20, maxWidth: 500, display: 'flex', flexDirection: 'row' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      ref={ref}
      {...}
      >
        <Form.Item
          label="Name"
          name="name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="ID"
          name="id"
        >
          <Input/>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
});

ExampleComponent.displayName = 'ExampleComponent';

export default ExampleComponent;
