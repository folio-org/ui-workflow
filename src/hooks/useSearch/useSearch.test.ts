import { renderHook } from '@testing-library/react';

import { useSearch } from './useSearch';
import { ITEM_COLUMNS_NAME, VIEW } from '../../constants';

describe('useSearch', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useSearch(VIEW.NAME, ITEM_COLUMNS_NAME.NAME));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
