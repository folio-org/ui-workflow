import React, { ChangeEvent, useCallback, useState } from 'react';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { isEqual } from 'lodash';
import { FilterGroupsConfig, FilterGroupsState } from '@folio/stripes/components';

import { DEFAULT_FILTERS, FILTER_APPLIED_KEY } from '../../../constants';
import { getFilters } from './helpers';

export const useFilters = (view: string) => {
  const defaultFilterConfig = DEFAULT_FILTERS[view];
  const [storedAppliedFilters] = useLocalStorage<FilterGroupsState>(FILTER_APPLIED_KEY[view], DEFAULT_FILTERS[view]);
  const [appliedFilters, setAppliedFilters] = useState<FilterGroupsState>(storedAppliedFilters);
  const activeFilters = getFilters(appliedFilters);
  const filterCount = activeFilters?.length;

  const isDefaultState = useCallback((): boolean => {
    return isEqual(defaultFilterConfig, appliedFilters);
  }, [ appliedFilters ]);

  const saveFilters = useCallback((filters: FilterGroupsState) => {
    setAppliedFilters(filters);
    writeStorage(FILTER_APPLIED_KEY[view], filters);
  }, [ appliedFilters ]);

  const onChangeFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    const filters = { ...appliedFilters };

    if (checked) {
      filters[name] = true;
    } else {
      delete filters[name];
    }

    saveFilters(filters);
  }, [ appliedFilters ]);

  const onResetAll = useCallback(() => {
    saveFilters(defaultFilterConfig);
  }, [ appliedFilters ]);

  const onClearGroup = useCallback((groupName: string) => {
    const filters = { ...appliedFilters };

    for (const name in filters) {
      if (name.startsWith(groupName)) {
        delete filters[name];
      }
    }

    saveFilters(filters);
  }, [ appliedFilters ]);

  return {
    onChangeFilter,
    onClearGroup,
    onResetAll,
    filterCount,
    activeFilters,
    appliedFilters,
    isDefaultState,
  };
};
