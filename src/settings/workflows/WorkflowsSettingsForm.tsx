import React from 'react';
import type { FunctionComponent } from 'react'
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

import { useStripes } from '@folio/stripes/core';
import { Button, Layout, Pane, TextField } from '@folio/stripes/components';

export const WorkflowsSettingsForm = (props: any) => {
  const stripes = useStripes();
  const handleSubmit: any = props?.handleSubmit;
  const label: string = props?.label ? props.label : "Workflows??";
  const pristine: boolean = props?.pristine ? props.pristine : true;
  const submitting: boolean = props?.submitting ? props.submitting : false;

  const lastMenu = (
    <Button
      buttonStyle="primary"
      disabled={pristine || submitting}
      id="clickable-save-workflow-display-settings"
      marginBottom0
      type="submit"
    >
      <FormattedMessage id="stripes-core.button.save" />
    </Button>
  );

  const fieldLabel = (
    <FormattedMessage id="ui-workflow.settings.workflows.paginationSize" />
  );

  return (
    <form id="workflow-display-settings-form" onSubmit={handleSubmit}>
    </form>
  );
};
