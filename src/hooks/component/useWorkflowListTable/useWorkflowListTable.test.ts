import { renderHook } from '@testing-library/react';

import { useWorkflowListTable } from './';

describe('useWorkflowListTable', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useWorkflowListTable({}, {}));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
