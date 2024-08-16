import { IFilterConfig } from '../../../interfaces';

export const useFilterConfigCreate = (): IFilterConfig => {
  const filters: any[] = [
  ];

  const searchIndexes: any[] = [
  ];

  const searchSettings = {
  };

  return {
    filters,
    searchIndexes,
    searchSettings,
  };
};
