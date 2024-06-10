import { renderHook } from '@testing-library/react';

import { useUploadMultipart } from './useUploadMultipart';

describe('useUploadMultipart', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useUploadMultipart());

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
