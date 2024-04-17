import { VIEW } from '../../constants';
import { IFilterConfig } from '../../interfaces';
import { t } from '../../utilities';
import { useFilterConfigBrowse } from './useFilterConfigBrowse';
import { useFilterConfigCreate } from './useFilterConfigCreate';

export const useFilterConfig = (view: string): IFilterConfig => {

  if (view == VIEW.create) {
    return useFilterConfigCreate();
  }

  return useFilterConfigBrowse();
};
