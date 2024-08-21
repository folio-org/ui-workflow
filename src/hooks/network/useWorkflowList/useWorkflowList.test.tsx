import { renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { PATH, VIEW } from '../../../constants';
import { useFilterConfig, useWorkflowList } from '../../';

const createWrapper = () => {
  const queryClient = new QueryClient()
  return (props?: any) => (<QueryClientProvider client={queryClient}>{props?.children}</QueryClientProvider>);
};

describe('useWorkflowList', () => {
  describe('When initial render happened', () => {
    const filtersConfig = useFilterConfig(VIEW.BROWSE);

    const { result } = renderHook(() => useWorkflowList(PATH[VIEW.BROWSE], { filtersConfig }), { wrapper: createWrapper() });

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
