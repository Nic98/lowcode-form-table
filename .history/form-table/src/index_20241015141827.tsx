import * as React from 'react';
import { forwardRef } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';


interface ComponentProps {
  title: string;
  content: string;
}

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const ExampleComponent = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
  const { title, content, ...others } = props;

  return (
    <div ref={ref} className="ExampleComponent" {...others}>
      <h1>{title || 'ExampleComponent'}</h1>
      {content || 'Hello ExampleComponent'}
    </div>
  );
});

ExampleComponent.displayName = 'ExampleComponent';

export default ExampleComponent;
