import { renderHook } from '@testing-library/react';

import { useMainListTable } from './';

describe('useMainListTable', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useMainListTable({}, {}));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
