import { renderHook } from '@testing-library/react';

import { usePaneControl } from '.';

describe('usePaneControl', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => usePaneControl(''));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
