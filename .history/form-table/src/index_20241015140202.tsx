import * as React from 'react';
import { forwardRef, useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';


interface ComponentProps {
  title: string;
  content: string;
}
type LayoutType = Parameters<typeof Form>[0]['layout'];

const ExampleComponent = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
  const { title, content, ...others } = props;
  
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <Form
      layout={formLayout}
      form={form}
      initialValues={{ layout: formLayout }}
      onValuesChange={onFormLayoutChange}
      style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
    >
      <Form.Item label="Form Layout" name="layout">

          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
});

ExampleComponent.displayName = 'ExampleComponent';

export default ExampleComponent;
