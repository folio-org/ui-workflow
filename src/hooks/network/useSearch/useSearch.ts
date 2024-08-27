import React from 'react';
import { ChangeEvent } from 'react';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';

import { ITEM_COLUMNS_NAME, SEARCH_WORKFLOWS_VALUE_KEY } from '../../../constants';
import { ISearchState } from '../../../interfaces';

/**
 * Provide searching of Workflows for use with the search pane.
 *
 * view: The specific view the search is associated with.
 * initialIndex: The initial, or default, index position to use.
 */
export const useSearch = (view: string, initialIndex: string) => {
  const [ storedSearch ] = useLocalStorage<ISearchState>(SEARCH_WORKFLOWS_VALUE_KEY, { key: initialIndex, value: "" });
  const [ appliedSearch, setAppliedSearch ] = React.useState<ISearchState>(storedSearch);

  const isDefaultState = (): boolean => {
    return appliedSearch.value == "" && appliedSearch.key == initialIndex;
  };

  const saveSearch = (state: ISearchState) => {
    setAppliedSearch(state);
  };

  const onChangeIndex = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    saveSearch({ key: target.value, value: appliedSearch.value });
  };

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    saveSearch({ key: appliedSearch.key, value: target.value });
  };

  const onClear = () => {
    saveSearch({ key: appliedSearch.key, value: "" });
  };

  const onResetAll = () => {
    const state = { key: initialIndex, value: "" };

    saveSearch(state);
    writeStorage(SEARCH_WORKFLOWS_VALUE_KEY, state);
  };

  const onSubmit = () => {
    writeStorage(SEARCH_WORKFLOWS_VALUE_KEY, appliedSearch);
  };

  return {
    appliedSearch,
    onChangeIndex,
    onChangeSearch,
    onClear,
    onResetAll,
    onSubmit,
    isDefaultState,
    index: appliedSearch.key,
    value: appliedSearch.value,
  };
};
