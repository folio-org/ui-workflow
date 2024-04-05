import React from 'react';
import type { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl';

import { stripesConnect } from '@folio/stripes/core';
import { ConfigManager as UnconnectedConfigManager } from '@folio/stripes/smart-components';

import { WorkflowsSettingsForm } from './WorkflowsSettingsForm';

const ConfigManager = stripesConnect(UnconnectedConfigManager);

export const WorkflowsSettings: FunctionComponent = () => {
  const getInitialValues = (settings: any) => {
    if (settings[0]?.value) return JSON.parse(settings[0]?.value);
    return {};
  }

  return (
    <ConfigManager
      configFormComponent={WorkflowsSettingsForm}
      configName="workflows"
      getInitialValues={getInitialValues}
      label={<FormattedMessage id="ui-workflow.settings.workflows" />}
      moduleName="WORKFLOW"
      onBeforeSave={JSON.stringify}
    />
  );
};
