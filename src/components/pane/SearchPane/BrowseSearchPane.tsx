import { isEqual } from 'lodash';
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, FilterGroups, Icon, SearchField } from '@folio/stripes/components';

import { SEARCH_WORKFLOWS_DEFAULT_KEY, SEARCH_WORKFLOWS_VALUE_ID, VIEW } from '../../../constants';
import { useBrowseSearchPaneFilter, useFilters, useFilterConfig, useSearch } from '../../../hooks';
import { IListProperties } from '../../../interfaces';
import css from './SearchPane.module.css';

/**
 * A pane for presenting search information for the browse view from VIEW.
 */
export const BrowseSearchPane: React.FC<IListProperties> = ({ data, isLoading, limit, offset, readFilters }) => {
  const filterConfig = useFilterConfig(VIEW.BROWSE);
  const filters = useFilters(VIEW.BROWSE);
  const search = useSearch(VIEW.BROWSE, SEARCH_WORKFLOWS_DEFAULT_KEY);
  const browsePane = useBrowseSearchPaneFilter(filters, search);

  useEffect(() => {
    browsePane.setIsDefaultState(browsePane.getDefaultState());
  }, [ filters.appliedFilters, search.value, search.index ]);

  return (
    <form>
      <FormattedMessage id='ui-workflow.title.searchWorkflowsPane'>
        { ([ariaLabel]) => (
          <SearchField
            id={SEARCH_WORKFLOWS_VALUE_ID}
            autoFocus
            ariaLabel={ariaLabel}
            searchableIndexes={ filterConfig.searchIndexes }
            selectedIndex={ search.index }
            loading={isLoading}
            value={ search.value }
            onChangeIndex={ search.onChangeIndex }
            onChange={ search.onChangeSearch }
            onClear={ search.onClear }
          />
        )}
      </FormattedMessage>
      <Button buttonStyle='primary' fullWidth id='clickable-search-workflow' type='submit' onClick={ browsePane.onSearchSubmit }>
        <FormattedMessage id='stripes-smart-components.search' />
      </Button>
      <div className={css.resetButtonWrap}>
        <Button
          // @ts-ignore:next-line
          buttonStyle='none'
          id='clickable-reset-all'
          disabled={ browsePane.isDefaultState }
          onClick={ browsePane.onResetAll }
        >
          <Icon icon='times-circle-solid'>
            <FormattedMessage id='stripes-smart-components.resetAll' />
          </Icon>
        </Button>
      </div>
      <FilterGroups
        config={ filterConfig.filters }
        filters={ filters.appliedFilters }
        onChangeFilter={ filters.onChangeFilter }
        onClearFilter={ filters.onClearGroup }
      />
    </form>
  );
};