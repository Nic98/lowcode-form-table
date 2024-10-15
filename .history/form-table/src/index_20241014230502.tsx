import React from 'react';

interface ComponentProps {
  title: string;
  content: string;
}

const ExampleComponent = (props: ComponentProps) => {
  const { title, content, ...others } = props;

  return (
    <div className="ExampleComponent" {...others}>
      <h1>{title}</h1>
      {content || 'Hello ExampleComponent'}
    </div>
  );
};

export default ExampleComponent;
