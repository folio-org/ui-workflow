import type { FunctionComponent } from 'react';
import { Settings, SettingsProps } from '@folio/stripes/smart-components';
import React from 'react';
import WorkflowSettings from './settings';

const WorkflowApp: FunctionComponent<SettingsProps> = (props) => {
  if (props.showSettings) {
    return <WorkflowSettings {...props} />;
  }

  return (
    <div>
      <h2>Hello World</h2>
      <p>This is the Workflow App interface.</p>
    </div>
  );
};

export default WorkflowApp;
