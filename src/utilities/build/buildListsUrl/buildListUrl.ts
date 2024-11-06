import { SEARCH_WORKFLOWS_DEFAULT_KEY } from '../../../constants';
import { IListRequest, ISearchState } from '../../../interfaces';
import { buildBrowseQuery } from '../..';

export const buildListUrl = (url: any, request: IListRequest) => {
  if (!url || url === '' || !request?.filtersConfig) return '';

  const { filters = [], search = { key: SEARCH_WORKFLOWS_DEFAULT_KEY, value: '' }, limit = 10, offset = 0 } = request || {};

  const params: string[] = [];
  params.push('query=' + buildBrowseQuery(filters, request.filtersConfig, search));
  params.push('offset=' + offset.toString());
  params.push('limit=' + limit.toString());

  return params.length > 0 ? `${url}?${params.join('&')}` : url;
};
