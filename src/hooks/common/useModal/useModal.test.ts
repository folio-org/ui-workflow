import { renderHook } from '@testing-library/react';

import { VIEW } from '../../../constants';
import { useModal } from './';

describe('useModal', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useModal(VIEW.NAME));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });

  describe('When initial render happened with onShow callback', () => {
    const { result } = renderHook(() => useModal(() => {}));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });

  describe('When initial render happened with onHide callback', () => {
    const { result } = renderHook(() => useModal(null, () => {}));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });

  describe('When initial render happened with all callbacks', () => {
    const { result } = renderHook(() => useModal(() => {}, () => {}));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
