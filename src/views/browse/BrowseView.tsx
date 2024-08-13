/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { FunctionComponent, useState } from 'react';
import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import { Button, ErrorBoundary, Pane, Paneset, FilterPaneSearch, PaneHeader } from '@folio/stripes/components';
import { useStripes } from '@folio/stripes/core';
import { noop } from 'lodash';

import { FilterMenu, FilterPane, ListTable, WorkflowIcon } from '../../components';
import { getFilters, useItemRecordControl, useFilterConfig, useLists } from '../../hooks';
import { CURRENT_PAGE_OFFSET_KEY, DEFAULT_FILTERS, FILTER_APPLIED_KEY, PAGINATION_AMOUNT, PATH, SEARCH_WORKFLOWS_DEFAULT_KEY, SEARCH_WORKFLOWS_VALUE_KEY, VIEW } from '../../constants';
import { IView, IItemRecordControl } from '../../interfaces';
import { t } from '../../utilities';
import { ItemRecordView } from '../';

/**
 * A main view for displaying "browse" information.
 *
 * This is part of VIEW.
 */
export const BrowseView: FunctionComponent<IView> = (props?: any) => {
  const [ storedCurrentPageOffset ] = useLocalStorage<number>(CURRENT_PAGE_OFFSET_KEY, 0);
  const [ readFilter ] = useLocalStorage(FILTER_APPLIED_KEY[VIEW.BROWSE], DEFAULT_FILTERS[VIEW.BROWSE]);
  const [ readSearch ] = useLocalStorage(SEARCH_WORKFLOWS_VALUE_KEY, SEARCH_WORKFLOWS_DEFAULT_KEY);
  const limit = PAGINATION_AMOUNT;
  const offset = (typeof storedCurrentPageOffset == 'number') ? storedCurrentPageOffset : 0;
  const filters = getFilters(readFilter);
  const filtersConfig = useFilterConfig(VIEW.BROWSE);
  const search = (typeof readSearch == 'object') ? readSearch : { key: SEARCH_WORKFLOWS_DEFAULT_KEY, value: '' };

  const stripes = useStripes();
  const { data, isLoading } = useLists(PATH[VIEW.BROWSE], { filters, filtersConfig, search, limit, offset });
  const control: IItemRecordControl = useItemRecordControl(PATH[VIEW.BROWSE]);

  return <Paneset>
    <ErrorBoundary>
      <Paneset isRoot>
        <FilterPane view={ VIEW.BROWSE } data={data} isLoading={isLoading} limit={limit} offset={offset} readFilters={filters} />
        <Pane
          defaultWidth='75%'
          paneTitle={ t('title.workflowList') }
          appIcon={ <WorkflowIcon /> }
          firstMenu={ <FilterMenu /> }
          lastMenu={ <Button bottomMargin0 buttonStyle='primary' onClick={noop}>{ t('button.actions') }</Button> }
        >
          <ListTable
            view={ VIEW.BROWSE }
            data={data}
            isLoading={isLoading}
            limit={limit}
            offset={offset}
            readFilters={filters}
            rowSelect={ control?.onItemClick }
          />
        </Pane>
      </Paneset>
      <ItemRecordView control={control} view={ VIEW.BROWSE } stripes={stripes} />
    </ErrorBoundary>
  </Paneset>;
};
