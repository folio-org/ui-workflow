import type { FunctionComponent } from 'react';
import React from 'react';

interface WorkflowAppProps {
  match: {
    path: string
  };
};

const WorkflowApp: FunctionComponent<WorkflowAppProps> = (props) => {
  const { match: { path } } = props;

  return (
    <div>
      <h2>Hello World</h2>
      <p>This is the Workflow Builder App interface.</p>
    </div>
  );
};

export default WorkflowApp;
