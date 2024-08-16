import { renderHook } from '@testing-library/react';

import { VIEW } from '../../../constants';
import { useFilterConfig } from './';

describe('useFilterConfig', () => {
  describe('When initial render happened for browse', () => {
    const { result } = renderHook(() => useFilterConfig(VIEW.BROWSE));

    it('is expected to return something', () => {
      expect(result.current).toBeDefined();
    });
  });

  describe('When initial render happened for create', () => {
    const { result } = renderHook(() => useFilterConfig(VIEW.CREATE));

    it('is expected to return something', () => {
      expect(result.current).toBeDefined();
    });
  });
});
