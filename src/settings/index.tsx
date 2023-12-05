import type { FunctionComponent } from 'react';
import React from 'react';

interface WorkflowSettingsProps {
  match: {
    path: string
  };
};

const WorkflowSettings: FunctionComponent<WorkflowSettingsProps> = (props) => {
  const { match: { path } } = props;

  return (
    <div>
      <h2>Hello World</h2>
      <p>This is the Workflow Builder settings interface.</p>
    </div>
  );
};

export default WorkflowSettings;
