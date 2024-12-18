import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Settings, SettingsProps } from '@folio/stripes/smart-components';

import { IApp } from './interfaces';
import { MainView, SettingsView } from './views';

export const queryClient = new QueryClient();

const WorkflowApp: React.FC<IApp> | React.FC<SettingsProps> = (props: any) => {
  const { match: { path } } = props;

  if (props?.showSettings) {
    return <SettingsView { ...props } />;
  }

  return <MainView
    // @ts-ignore:next-line
    client={queryClient}
    path={path}
  />;
};

export default WorkflowApp;
