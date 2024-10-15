import * as React from 'react';
import { useState, forwardRef, ForwardRefRenderFunction } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';


interface ComponentProps {
  api?: string;
  type?: string;
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
  const { api, type='tableForm', ...others } = props;

  const [name, setName] = useState('');
  const [id, setId] = useState('');

  return (
    <div className="lowcode-spa-queryform" ref={ref}>
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
            }}
          />
            
          </Form.Item>

          <Form.Item
            label="ID"
            name="id"
          >
            <Input
              onChange={(v: any) => {
              setId(v.target.value);
              }}
            />
          </Form.Item>
        
          {
            type === 'tableForm' ? (
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => {
                  console.log(name, id);
                  const xhr = new XMLHttpRequest();
                  xhr.open("GET", `https://${api||`proapi.azurewebsites.net/api/rule?token%20=%20123&current=1&pageSize=100`}`, true);
                  xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                      const res = JSON.parse(xhr.responseText);
                      const data = res.data;
                      console.log(data);
                    }
                  };
                  xhr.send();
                }}
              >
                Search
              </Button>
            </Form.Item>)
            : null
          }

      </Form>
    </div>

  );
};

const RefExampleComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);
RefExampleComponent.displayName = 'ExampleComponent';

export default RefExampleComponent;
