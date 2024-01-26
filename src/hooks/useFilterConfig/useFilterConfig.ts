import { VIEW } from '../../constants';
import { t } from '../../utilities';
import { useFilterConfigBrowse } from './useFilterConfigBrowse';
import { useFilterConfigCreate } from './useFilterConfigCreate';

export const useFilterConfig = (view: string) => {

  if (view == VIEW.create) {
    return useFilterConfigCreate();
  }

  return useFilterConfigBrowse();
};
