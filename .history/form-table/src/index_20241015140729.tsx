import * as React from 'react';
import { forwardref } from 'react';
import { Button, Form, Input, Radio } from 'antd';


interface ComponentProps {
  title: string;
  content: string;
}

const ExampleComponent = forwardref<HTMLDivElement, ComponentProps>((props, ref) => {
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
