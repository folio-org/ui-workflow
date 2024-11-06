import { useQuery } from 'react-query';
import { useOkapiKy } from '@folio/stripes/core';

/**
 * Fetch a single Workflow by the Workflow ID.
 *
 * path: The specific path to fetch from (without a trailing slash).
 * workflowId: The workflow ID.
 */
export const useWorkflow = (path: string, workflowId: string) => {
  const ky = useOkapiKy();
  const url = `${path}/${workflowId}`;

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: [url],
    queryFn: () => {
      if (url === '') return null;

      return ky.get(url).then((res) => { return res.json(); });
    },
    refetchOnWindowFocus: false
  });

  return { data, error, isLoading, refetch };
};
