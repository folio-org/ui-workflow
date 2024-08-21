import { renderHook } from '@testing-library/react';

import { VIEW } from '../../../constants';
import { useFilters } from './';

describe('useFilters', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useFilters(VIEW.NAME));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
