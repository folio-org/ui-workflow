import { renderHook } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { BACKEND_PATH, VIEW } from '../../../constants';
import { useWorkflow } from './';

const createWrapper = () => {
  const queryClient = new QueryClient();
  return (props?: any) => (<QueryClientProvider client={queryClient}>{ props?.children }</QueryClientProvider>);
};

describe('useWorkflow', () => {
  describe('When initial render happened', () => {
    const { result } = renderHook(() => useWorkflow(BACKEND_PATH[VIEW.WORKFLOW], "uuid"), { wrapper: createWrapper() });

    it('is expected to return defined', () => {
      expect(result.current).toBeDefined();
    });
  });
});
