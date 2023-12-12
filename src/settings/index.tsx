import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { ErrorBoundary } from '@folio/stripes/components';
import { useStripes } from '@folio/stripes/core';
import { Settings, SettingsProps } from '@folio/stripes/smart-components';

const WorkflowSettings: FunctionComponent<SettingsProps> = (props) => {
  const intl = useIntl();
  const stripes = useStripes();
  const paneTitle = intl.formatMessage({ id: 'ui-workflow.meta.titleSettings' });

  return (
    <ErrorBoundary>
      <Settings
        {...props}
        navPaneWidth="30%"
        pages={[]}
        paneTitle={<FormattedMessage id="ui-workflow.meta.titleSettings" />}
      />
    </ErrorBoundary>
  );
};

export default WorkflowSettings;
