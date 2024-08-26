import type { FunctionComponent } from 'react';
import React, { useState } from 'react';
import { ErrorBoundary, Pane, Paneset } from '@folio/stripes/components';
import { useStripes } from '@folio/stripes/core';

import { CreateActionMenu, FilterMenu, FilterPane, ImportPane, WorkflowIcon } from '../../components';
import { FILTER_APPLIED_KEY, PATH, VIEW } from '../../constants';
import { usePaneControl } from '../../hooks';
import { IView } from '../../interfaces';
import { t } from '../../utilities';

/**
 * A main view for displaying "create" information.
 *
 * This is part of VIEW.
 */
export const CreateView: FunctionComponent<IView> = (props?: any) => {
  const control = usePaneControl(PATH[VIEW.CREATE]);
  const stripes = useStripes();

  return <Paneset>
    <ErrorBoundary>
      <FilterPane view={ VIEW.CREATE } />
      <Pane
        defaultWidth='fill'
        paneTitle={ t('title.create') }
        appIcon={ <WorkflowIcon /> }
        firstMenu={ <FilterMenu /> }
        lastMenu={ <CreateActionMenu control={control} stripes={stripes} /> }
      >
        <></>
      </Pane>
      <ImportPane control={control} view={ VIEW.CREATE } stripes={stripes} />
    </ErrorBoundary>
  </Paneset>;
};
