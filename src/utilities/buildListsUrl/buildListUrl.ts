import { STATUS_ACTIVE, STATUS_INACTIVE } from '../../constants';

export const buildListUrl = (url: string, request?: any) => {
  const { filters, offset, size, idsToTrack } = request || {};
  const params = new URLSearchParams();
  const entityTypeIdsArray = [];

  if (filters?.length) {
    if (filters.includes(STATUS_ACTIVE) && !filters.includes(STATUS_INACTIVE)) {
      params.append('active', 'true');
    } else if (filters.includes(STATUS_INACTIVE) && !filters.includes(STATUS_ACTIVE)) {
      params.append('active', 'false');
    }

    for (const filter of filters) {
      entityTypeIdsArray.push(filter);
    }
  }

  const entityTypeIdsString = entityTypeIdsArray.join(',');

  if (entityTypeIdsString) params.append('entityTypeIds', entityTypeIdsString);

  // If tracking IDs, don't use offset
  if (offset && !idsToTrack?.length) params.append('offset', offset.toString());

  if (size) params.append('size', size.toString());

  if (idsToTrack?.length) {
    params.append('ids', idsToTrack.join(','));
  }

  const paramString = params.toString();

  if (paramString) {
    return url + `?${paramString}`;
  }

  return url;
}
