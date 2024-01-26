import type { FunctionComponent } from 'react';
import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import { Button, FilterGroups, Icon, Pane, PaneMenu } from '@folio/stripes/components';
import { SingleSearchForm } from '@folio/stripes-acq-components';
import { CollapseFilterPaneButton } from '@folio/stripes/smart-components';
import { noop } from 'lodash';

import css from './FilterPane.module.css';
import { CREATE_PATH, FILTER_APPLIED_KEY, FILTER_PANE_VISIBILITY_KEY, HOME_PAGE_URL, VIEW } from '../../constants';
import { useFilters, useFilterConfig } from '../../hooks';
import { IView } from '../../interfaces';
import { t, tf } from '../../utilities';

export const FilterPane: any = (props: any) => {
  const [ filterPaneIsVisible, writeToggleFilterStorage ] = useLocalStorage(FILTER_PANE_VISIBILITY_KEY, true);

  const { view } = props;
  const { filterConfig, isLoadingConfigData } = useFilterConfig(view);
  const {
    onChangeFilter,
    onResetAll,
    onClearGroup,
    filterCount,
    activeFilters,
    appliedFilters,
    isDefaultState
  } = useFilters(filterConfig, view);

  if (!filterPaneIsVisible) {
    return null;
  }

  const lastMenu = <PaneMenu><CollapseFilterPaneButton onClick={ () => writeToggleFilterStorage(false) } /></PaneMenu>;
  const browseStyle = (view == VIEW.CREATE) ? 'default' : 'primary';
  const createStyle = (view == VIEW.CREATE) ? 'primary' : 'default';

  let filterGroups;
  if (view == VIEW.BROWSE) {
    filterGroups = (
      <>
        <div>
          <Button id="clickable-reset-all" disabled={false}
            // @ts-ignore:next-line
            buttonStyle="none"
          >
            <Icon icon="times-circle-solid">{ tf('stripes-smart-components.resetAll') }</Icon>
          </Button>
        </div>
        <FilterGroups
          config={filterConfig}
          filters={appliedFilters}
          onChangeFilter={onChangeFilter}
          onClearFilter={onClearGroup}
        />
      </>
    );
  }

  return (
    <Pane defaultWidth="30%" paneTitle={ t('title.filterPane') } lastMenu={lastMenu}>
      <div>
        <Button buttonStyle={browseStyle} onClick={noop} to={HOME_PAGE_URL}>{ t('button.browse') }</Button>
        <Button buttonStyle={createStyle} onClick={noop} to={HOME_PAGE_URL + CREATE_PATH}>{ t('button.create') }</Button>
      </div>
      {filterGroups}
      <div>
      </div>
    </Pane>
  );
};
