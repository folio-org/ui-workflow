import { renderHook } from '@testing-library/react';

import { useDeleteRequest } from './';

describe('useDeleteRequest', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useDeleteRequest());

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
