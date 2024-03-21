import { STATUS_ACTIVE, STATUS_INACTIVE } from '../../constants';

export const buildListUrl = (url: string, request?: any) => {
  const { query, limit, offset } = request || {};
  const params = new URLSearchParams();

  if (typeof query == 'string') params.append('query', query);
  if (offset) params.append('offset', offset.toString());
  if (limit) params.append('limit', limit.toString());

  const paramString = params.toString();

  return paramString ? url + `?${paramString}` : url;
}
