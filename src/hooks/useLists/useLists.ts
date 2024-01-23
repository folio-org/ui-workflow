import { useQuery } from 'react-query';
import { useOkapiKy } from '@folio/stripes/core';

import { HOME_PAGE_SHORT, POLLING_STATUS_DELAY } from '../../constants';
import { IListRequest, IListResponse, IItemRecord } from '../../interfaces';
import { buildListUrl } from '../../utilities';

export const useLists = (request?: IListRequest) => {
  const ky = useOkapiKy();
  const url = buildListUrl(HOME_PAGE_SHORT, request);

  const { data, isLoading, error } = useQuery<IListResponse<IItemRecord[]>, Error>(
    {
      queryKey: [ url ],
      queryFn: async () => {
        const response = await ky.get(url);

        return response.json();
      },
      refetchOnWindowFocus: false
    },
  );

  return { listsData: data, isLoading, error };
};
