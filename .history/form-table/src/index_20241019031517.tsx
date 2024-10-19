import * as React from 'react';
import { useState, useEffect, forwardRef, ForwardRefRenderFunction } from 'react';
// import type { FormProps } from 'antd';
import { Button,Form, Input } from 'antd/es';
import { addGoods, getGoodsList, deleteGoods, updateGoods } from './services/goodsServices.js';


interface ComponentProps {
  // api?: string;
  dataSource?: any;
  type?: string;
}

// type FieldType = {
//   username?: string;
//   password?: string;
// };

// const onFinish: FormProps<FieldType>['onFinish'] = (values:any) => {
//   console.log('Success:', values);
// };

// const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo:any) => {
//   console.log('Failed:', errorInfo);
// };


const FormTableComponent = (props: ComponentProps, ref: any) => {
  const { dataSource, type='tableForm', ...others } = props;

  // state management
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [data, setData] = useState([]);



  // const currDoc = window.AliLowCodeEngine.project.currentDocument;
  // const schema = currDoc.exportSchema();
  // const components = currDoc.getComponentsMap();

  // console.log('this is the schema:', schema);

  const getTable =  async (name: string, id: string) => {
    console.log(`the name and id are:${name}, ${id}`);

    if (name === '' && id === '') {
      try {
        const data = await getGoodsList();
        console.log(`here are the data~~~: ${data}`);
        setData(data);
        localStorage.setItem('data', JSON.stringify(data));
        
      } catch (error) {
        console.error('Error updating table:', error);
      }
      return;
    }
    try {
      const data = await getGoodsList();
      console.log(`here are the searched data~~~: ${data}`);
      setData(data);
      localStorage.setItem('data', JSON.stringify(data));
      // currDoc.importSchema(data); // 将数据导入到 schema 中
      props.dataSource = data;
    } catch (error) {
      console.error('Error updating table:', error);
    }
  }

  useEffect(() => {getTable(name, id)}, []);

  // console.log('this is the exported schema:', currDoc.exportSchema());


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
                onClick={() => getTable(name, id)}
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

const RefFormTableComponent = forwardRef(FormTableComponent as ForwardRefRenderFunction<any, ComponentProps>);
RefFormTableComponent.displayName = 'FormTableComponent';

export type { ComponentProps };
export default RefFormTableComponent;
