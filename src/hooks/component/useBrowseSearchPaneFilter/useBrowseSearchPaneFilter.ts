import React, { useCallback, useState } from 'react';

/**
 * A hook specific to the BrowseSearchPane component for managing filters.
 *
 * filters: The useFilters() instance.
 * search: The useSearch() instance.
 */
export const useBrowseSearchPaneFilter = (filters: any, search: any) => {
  const getDefaultState = useCallback((): boolean => {
    return filters.isDefaultState() && search.isDefaultState();
  }, [ filters.appliedSearch ]);

  const [ isDefaultState, setIsDefaultState ] = useState(getDefaultState());

  const onSearchSubmit = useCallback((e: any) => {
    e?.preventDefault();
    search.onSubmit();
  }, [ search.appliedSearch ]);

  const onResetAll = useCallback(() => {
    filters.onResetAll();
    search.onResetAll();
  }, [ filters.appliedFilters, search.appliedSearch, search.value, search.index ]);

  return { getDefaultState, isDefaultState, onResetAll, onSearchSubmit, setIsDefaultState };
};
