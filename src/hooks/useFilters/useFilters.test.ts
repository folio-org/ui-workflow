import { renderHook } from '@testing-library/react';

import { useFilters } from './useFilters';
import { VIEW } from '../../constants';

describe('useFilters', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useFilters(VIEW.NAME));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
