import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import { Button, Pane, PaneMenu } from '@folio/stripes/components';
import { CollapseFilterPaneButton } from '@folio/stripes/smart-components';
import { noop } from 'lodash';

import { CREATE_PATH, FILTER_APPLIED_KEY, FILTER_PANE_VISIBILITY_KEY, HOME_PAGE_URL, VIEW } from '../../../constants';
import { IListProperties } from '../../../interfaces';
import { t } from '../../../utilities';
import { BrowseSearchPane } from '..';

/**
 * A pane for presenting the side panel information for the different views from VIEW.
 */
export const FilterPane: React.FC<IListProperties> = ({ filterConfig, list, view }) => {
  const [ filterPaneIsVisible, writeToggleFilterStorage ] = useLocalStorage(FILTER_PANE_VISIBILITY_KEY, true);
  const browseStyle = (view === VIEW.CREATE) ? 'default' : 'primary';
  const createStyle = (view === VIEW.CREATE) ? 'primary' : 'default';
  const paneTitle = t((view === VIEW.CREATE) ? 'title.filterPane.create' : 'title.filterPane.search');

  const lastMenu = <PaneMenu><CollapseFilterPaneButton onClick={ () => writeToggleFilterStorage(false) } /></PaneMenu>;

  const searchPane = view === VIEW.BROWSE
    ? <BrowseSearchPane filterConfig={filterConfig} list={list} view={view} />
    : null;

  if (!filterPaneIsVisible) return null;

  return <Pane defaultWidth="25%" paneTitle={paneTitle} lastMenu={lastMenu}>
    <div>
      <Button buttonStyle={browseStyle} onClick={noop} to={HOME_PAGE_URL}>{ t('button.browse') }</Button>
      <Button buttonStyle={createStyle} onClick={noop} to={HOME_PAGE_URL + CREATE_PATH}>{ t('button.create') }</Button>
    </div>
    {searchPane}
  </Pane>;
};
