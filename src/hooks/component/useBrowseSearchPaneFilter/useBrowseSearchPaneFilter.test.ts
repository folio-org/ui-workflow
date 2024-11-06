import { renderHook } from '@testing-library/react';

import { useBrowseSearchPaneFilter } from '.';

const mockedNoop = {
  appliedSearch: {},
  onChangeIndex: (e: any) => {},
  onChangeSearch: (e: any) => {},
  onClear: () => {},
  onResetAll: () => {},
  onSubmit: () => {},
  isDefaultState: () => { return true; },
  index: 0,
  value: '',
};

describe('useBrowseSearchPaneFilter', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useBrowseSearchPaneFilter(mockedNoop, mockedNoop));

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
