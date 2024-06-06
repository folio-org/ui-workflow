import type { FunctionComponent } from 'react';
import React, { useState } from 'react';
import { ErrorBoundary, Pane, Paneset } from '@folio/stripes/components';

import { CreateActionMenu, FilterMenu, FilterPane, ImportDetailPane, ListTable, WorkflowIcon } from '../../components';
import { FILTER_APPLIED_KEY, PATH, VIEW } from '../../constants';
import { getFilters, useImportDetailPane } from '../../hooks';
import { IDetailPaneProperties, IView } from '../../interfaces';
import { t } from '../../utilities';

export const CreateView: FunctionComponent<IView> = (props: any) => {
  const importDetail: IDetailPaneProperties = useImportDetailPane(PATH[VIEW.CREATE]);

  return (
    <ErrorBoundary>
      <Paneset>
        <FilterPane view={VIEW.CREATE} readFilters={null} />
        <Pane
          defaultWidth='fill'
          paneTitle={ t('title.create') }
          appIcon={<WorkflowIcon />}
          firstMenu={<FilterMenu />}
          lastMenu={<CreateActionMenu importDetail={importDetail} />}
        >
          <></>
        </Pane>
        <ImportDetailPane importDetail={importDetail} view={VIEW.CREATE} />
      </Paneset>
    </ErrorBoundary>
  );
};
