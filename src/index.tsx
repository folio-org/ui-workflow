import type { FunctionComponent } from 'react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Settings, SettingsProps } from '@folio/stripes/smart-components';

import { IWorkflowApp } from './interfaces';
import { BrowseView, CreateView, SettingsView } from './views';

export const queryClient = new QueryClient();

const WorkflowApp: FunctionComponent<IWorkflowApp> | FunctionComponent<SettingsProps> = (props: any) => {
  if (props.showSettings) {
    return <SettingsView {...props} />;
  }

  const { match: { path } } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path={path} render={() => <BrowseView />} />
      </Switch>
      <Switch>
        <Route path={`${path}/create`} exact render={() => <CreateView />} />
      </Switch>
    </QueryClientProvider>
  );
};

export default WorkflowApp;
