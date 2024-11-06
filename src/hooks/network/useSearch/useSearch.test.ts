import { renderHook } from '@testing-library/react';

import { ITEM_COLUMNS_NAME, VIEW } from '../../../constants';
import { useSearch } from '.';

describe('useSearch', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useSearch(VIEW.NAME, ITEM_COLUMNS_NAME.NAME));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
