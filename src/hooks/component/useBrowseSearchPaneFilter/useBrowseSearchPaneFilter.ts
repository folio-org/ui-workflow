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
  }, [ filters, search ]);

  const [ isDefaultState, setIsDefaultState ] = useState(getDefaultState());

  const onSearchSubmit = useCallback((e: any) => {
    e?.preventDefault();
    search.onSubmit();
  }, [ search ]);

  const onResetAll = useCallback(() => {
    filters.onResetAll();
    search.onResetAll();
  }, [ filters, search ]);

  return { getDefaultState, isDefaultState, onResetAll, onSearchSubmit, setIsDefaultState };
};
