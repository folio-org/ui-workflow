import type { FunctionComponent } from 'react';
import React from 'react';
import { ErrorBoundary } from '@folio/stripes/components';
import { Settings, SettingsProps } from '@folio/stripes/smart-components';

import { t } from '../../utilities';

export const SettingsView: FunctionComponent<SettingsProps> = (props: any) => {
  return (
    <ErrorBoundary>
      <Settings {...props} navPaneWidth="30%" pages={[]} paneTitle={ t('title.settings') } />
    </ErrorBoundary>
  );
};
