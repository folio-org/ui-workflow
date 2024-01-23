import type { FunctionComponent } from 'react';
import React, { useState } from 'react';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { ErrorBoundary } from '@folio/stripes/components';
import { Pane, Paneset, Button } from '@folio/stripes/components';
import { noop } from 'lodash';

import { FilterMenu, FilterPane, ListTable, WorkflowIcon } from '../../components';
import { getFilters } from '../../hooks';
import { DEFAULT_FILTERS, FILTER_APPLIED_KEY, VIEW } from '../../constants';
import { IView } from '../../interfaces';
import { t } from '../../utilities';

export const BrowseView: FunctionComponent<IView> = (props: any) => {
  const [totalRecords, setTotalRecords] = useState(0);
  const [readAppliedFilter, writeAppliedFilter] = useLocalStorage(FILTER_APPLIED_KEY[VIEW.BROWSE], DEFAULT_FILTERS[VIEW.BROWSE]);
  const activeFilters = getFilters(readAppliedFilter);

  const actionMenu = <Button bottomMargin0 buttonStyle="primary" onClick={noop}>{ t('button.actions') }</Button>;

  return (
    <ErrorBoundary>
      <Paneset>
        <FilterPane view={VIEW.BROWSE} />
        <Pane defaultWidth="fill" paneTitle={ t('title.workflowList') } appIcon={<WorkflowIcon />} firstMenu={<FilterMenu />} lastMenu={actionMenu}>
          <ListTable activeFilters={activeFilters} setTotalRecords={setTotalRecords} />
        </Pane>
      </Paneset>
    </ErrorBoundary>
  );
};
