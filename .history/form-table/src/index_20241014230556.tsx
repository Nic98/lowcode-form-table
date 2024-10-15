import * as React from 'react';
import { forwardRef } from 'react';

interface ComponentProps {
  title: string;
  content: string;
}

const ExampleComponent = forwardRef<HTMLDivElement, ComponentProps>((props, ref) => {
  const { title, content, ...others } = props;

  return (
    <div ref={ref} className="ExampleComponent" {...others}>
      <h1>{title}</h1>
      {content || 'Hello ExampleComponent'}
    </div>
  );
});

ExampleComponent.displayName = 'ExampleComponent';

export default ExampleComponent;
