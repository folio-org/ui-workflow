import { renderHook } from '@testing-library/react';

import { useItemRecordControl } from './';

describe('useItemRecordControl', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useItemRecordControl(""));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
