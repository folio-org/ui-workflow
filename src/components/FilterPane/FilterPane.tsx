import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import { Button, Pane, PaneMenu } from '@folio/stripes/components';
import { CollapseFilterPaneButton } from '@folio/stripes/smart-components';
import { noop } from 'lodash';

import { BrowseSearchPane } from '../SearchPane';
import { CREATE_PATH, FILTER_APPLIED_KEY, FILTER_PANE_VISIBILITY_KEY, HOME_PAGE_URL, VIEW } from '../../constants';
import { IListProperties } from '../../interfaces';
import { t } from '../../utilities';

export const FilterPane: React.FC<IListProperties> = ({ view, data, isLoading, limit, offset, readFilters }) => {
  const [ filterPaneIsVisible, writeToggleFilterStorage ] = useLocalStorage(FILTER_PANE_VISIBILITY_KEY, true);

  const lastMenu = <PaneMenu><CollapseFilterPaneButton onClick={ () => writeToggleFilterStorage(false) } /></PaneMenu>;
  const browseStyle = (view == VIEW.CREATE) ? 'default' : 'primary';
  const createStyle = (view == VIEW.CREATE) ? 'primary' : 'default';
  const filterPaneTitle = (view == VIEW.CREATE) ? 'title.filterPane-create' : 'title.filterPane-search';

  if (!filterPaneIsVisible) return null;

  let searchPane;
  if (view == VIEW.BROWSE) {
    searchPane = (
      <BrowseSearchPane data={data} isLoading={isLoading} limit={limit} offset={offset} readFilters={readFilters} />
    );
  }

  return (
    <Pane defaultWidth='30%' paneTitle={ t(filterPaneTitle) } lastMenu={lastMenu}>
      <div>
        <Button buttonStyle={browseStyle} onClick={noop} to={HOME_PAGE_URL}>{ t('button.browse') }</Button>
        <Button buttonStyle={createStyle} onClick={noop} to={HOME_PAGE_URL + CREATE_PATH}>{ t('button.create') }</Button>
      </div>
      {searchPane}
    </Pane>
  );
};
