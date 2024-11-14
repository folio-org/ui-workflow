import { useQuery } from 'react-query';
import { useOkapiKy } from '@folio/stripes/core';

import { POLLING_STATUS_DELAY } from '../../../constants';
import { IListRequest, IListResponse, IItemRecord } from '../../../interfaces';
import { buildListUrl } from '../../../utilities';

/**
 * Fetch the list of Workflows.
 *
 * path: The specific path to fetch from.
 * request: The request structure used for fetching the list.
 */
export const useWorkflowList = (path: any, request: IListRequest) => {
  const ky = useOkapiKy();
  const url = buildListUrl(path, request);

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
