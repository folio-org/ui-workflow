/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { FunctionComponent, useState } from 'react';
import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import { Button, ErrorBoundary, Pane, Paneset, FilterPaneSearch, PaneHeader } from '@folio/stripes/components';
import { noop } from 'lodash';

import { FilterMenu, FilterPane, ListTable, WorkflowIcon } from '../../components';
import { getFilters, useFilterConfig, useLists } from '../../hooks';
import { CURRENT_PAGE_OFFSET_KEY, DEFAULT_FILTERS, FILTER_APPLIED_KEY, PAGINATION_AMOUNT, PATH, SEARCH_WORKFLOWS_DEFAULT_KEY, SEARCH_WORKFLOWS_VALUE_KEY, VIEW } from '../../constants';
import { ISearchState, IItemRecord, IView } from '../../interfaces';
import { t } from '../../utilities';
import { ItemRecordDetailPane } from '../../components/ItemRecordDetailPane';


export const BrowseView: FunctionComponent<IView> = (props: any) => {
  const [ storedCurrentPageOffset ] = useLocalStorage<number>(CURRENT_PAGE_OFFSET_KEY, 0);
  const [ readFilter ] = useLocalStorage(FILTER_APPLIED_KEY[VIEW.BROWSE], DEFAULT_FILTERS[VIEW.BROWSE]);
  const [ readSearch ] = useLocalStorage(SEARCH_WORKFLOWS_VALUE_KEY, SEARCH_WORKFLOWS_DEFAULT_KEY);
  const limit = PAGINATION_AMOUNT;
  const offset = (typeof storedCurrentPageOffset == "number") ? storedCurrentPageOffset : 0;
  const filters = getFilters(readFilter);
  const filtersConfig = useFilterConfig(VIEW.BROWSE);
  const search = (typeof readSearch == "object") ? readSearch : { key: SEARCH_WORKFLOWS_DEFAULT_KEY, value: "" };

  const { data, isLoading } = useLists(PATH[VIEW.BROWSE], { filters, filtersConfig, search, limit, offset });

  const actionMenu = <Button bottomMargin0 buttonStyle="primary" onClick={noop}>{ t('button.actions') }</Button>;

  const [selectedItem, setSelectedItem] = React.useState<IItemRecord>();
  const [showDetailPane, setShowDetailPane] = React.useState(true);
  // const [showChildComponent, setShowChildComponent] = useState(false);

  const handleOnRowClick = () => {
    setShowDetailPane(true); // Set showChildComponent state to true when row is clicked
  };
  const onRowClick = (e: any, itemRecord: IItemRecord) => {
    e?.preventDefault();
    console.log(selectedItem);
    console.log('ROW CLICKED', itemRecord);
    setSelectedItem(itemRecord);
    setShowDetailPane(true);
  };

  return (
    <ErrorBoundary>
      <Paneset>
        <FilterPane
          view={VIEW.BROWSE}
          data={data}
          isLoading={isLoading}
          limit={limit}
          offset={offset}
          readFilters={filters}
        />
        <Pane
          defaultWidth="fill"
          paneTitle={t('title.workflowList')}
          appIcon={<WorkflowIcon />}
          firstMenu={<FilterMenu />}
          lastMenu={actionMenu}
        >
          <ListTable
            onRowClick={onRowClick}
            view={VIEW.BROWSE}
            data={data}
            isLoading={isLoading}
            limit={limit}
            offset={offset}
            readFilters={filters}
          />
        </Pane>
        {selectedItem &&
          <Pane
            defaultWidth="fill"
            appIcon={<WorkflowIcon />}
          >
            {selectedItem &&
            <ItemRecordDetailPane
              selectedItem={selectedItem}
              showDetailPane={showDetailPane} /> }
          </Pane>
      </Paneset>
    </ErrorBoundary>
  );
};
