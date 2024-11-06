import { renderHook } from '@testing-library/react';

import { useClickControl } from '.';

describe('useClickControl', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useClickControl());

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });

  describe('When initial render happened with onDone callback', () => {
    const { result } = renderHook(() => useClickControl(() => {}));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });

  describe('When initial render happened with onClick callback', () => {
    const { result } = renderHook(() => useClickControl(null, () => {}));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });

  describe('When initial render happened with all callbacks', () => {
    const { result } = renderHook(() => useClickControl(() => {}, () => {}));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
