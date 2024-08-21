import type { FunctionComponent } from 'react';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ErrorBoundary } from '@folio/stripes/components';
import { Settings, SettingsProps } from '@folio/stripes/smart-components';

import { WorkflowsSettings } from '../../settings';
import { t } from '../../utilities';

/**
 * This is a main settings view for configuring the ui-workflow module.
 */
export const SettingsView: FunctionComponent<SettingsProps> = (props: any) => {
  const pages = [
    {
      route: 'workflows-settings',
      label: <FormattedMessage id="ui-workflow.settings.workflows" />,
      component: WorkflowsSettings,
    },
  ];

  return (
    <ErrorBoundary>
      <Settings {...props} navPaneWidth="30%" pages={pages} paneTitle={ t('title.settings') } />
    </ErrorBoundary>
  );
};
