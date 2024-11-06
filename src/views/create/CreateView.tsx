import type { FunctionComponent } from 'react';
import React, { useState } from 'react';
import { ErrorBoundary, Pane, Paneset } from '@folio/stripes/components';
import { useStripes } from '@folio/stripes/core';

import { CreateActionMenu, FilterMenu, FilterPane, ImportPane, WorkflowIcon } from '../../components';
import { BACKEND_PATH, VIEW } from '../../constants';
import { useFilterConfigCreate, usePaneControl } from '../../hooks';
import { t } from '../../utilities';

/**
 * A main view for displaying "create" information.
 */
export const CreateView: React.FC = (props?: any) => {
  const control = usePaneControl(BACKEND_PATH[VIEW.CREATE]);
  const stripes = useStripes();
  const filterConfig = useFilterConfigCreate();

  return <Paneset>
    <ErrorBoundary>
      <FilterPane filterConfig={filterConfig} view={ VIEW.CREATE } />
      <Pane
        appIcon={ <WorkflowIcon /> }
        defaultWidth="fill"
        firstMenu={ <FilterMenu /> }
        lastMenu={ <CreateActionMenu control={control} stripes={stripes} /> }
        paneTitle={ t('title.create') }
      >
        <></>
      </Pane>
      <ImportPane control={control} list={ props?.list } stripes={stripes} view={ VIEW.CREATE } />
    </ErrorBoundary>
  </Paneset>;
};
