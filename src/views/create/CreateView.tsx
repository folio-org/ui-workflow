import type { FunctionComponent } from 'react';
import React, { useState } from 'react';
import { ErrorBoundary } from '@folio/stripes/components';
import { Pane, Paneset, Button } from '@folio/stripes/components';
import { noop } from 'lodash';

import { FilterMenu, FilterPane, ListTable, WorkflowIcon } from '../../components';
import { FILTER_APPLIED_KEY, VIEW } from '../../constants';
import { getFilters } from '../../hooks';
import { IView } from '../../interfaces';
import { t } from '../../utilities';

export const CreateView: FunctionComponent<IView> = (props: any) => {
  const actionMenu = <Button bottomMargin0 buttonStyle="primary" onClick={noop}>{ t('button.actions') }</Button>;

  const mainPane = (
    <Pane defaultWidth="fill" paneTitle={ t('title.create') } appIcon={<WorkflowIcon />} firstMenu={<FilterMenu />} lastMenu={actionMenu}>
      todo
    </Pane>
  );

  return (
    <ErrorBoundary>
      <Paneset><FilterPane view={VIEW.CREATE} readFilters={null} /> {mainPane}</Paneset>
    </ErrorBoundary>
  );
};
