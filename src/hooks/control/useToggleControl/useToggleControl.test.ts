import { renderHook } from '@testing-library/react';

import { useToggleControl } from './';

describe('useToggleControl', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useToggleControl());

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });

  describe('When initial render happened with callback', () => {
    const { result } = renderHook(() => useToggleControl(() => {}));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
