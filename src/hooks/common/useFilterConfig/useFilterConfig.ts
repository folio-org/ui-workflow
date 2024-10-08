import { VIEW } from '../../../constants';
import { IFilterConfig } from '../../../interfaces';
import { t } from '../../../utilities';
import { useFilterConfigBrowse, useFilterConfigCreate } from './';

export const useFilterConfig = (view: string): IFilterConfig => {

  if (view == VIEW.CREATE) {
    return useFilterConfigCreate();
  }

  return useFilterConfigBrowse();
};
