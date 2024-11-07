import { renderHook } from '@testing-library/react';
import { SearchField } from '@folio/stripes/components';

import { ITEM_COLUMNS_NAME, VIEW } from '../../../constants';
import { useSearch } from '.';

describe('useSearch', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useSearch(VIEW.NAME, ITEM_COLUMNS_NAME.NAME));
    const search = result.current;

    it('is expected to return defined', () => {
      expect(search).toBeDefined();
    });

    it('isDefaultState() returns true', () => {
      expect(search.isDefaultState()).toEqual(true);
    });
  });
});
