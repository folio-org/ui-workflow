import { ISearchState } from '../../interfaces';

export const buildBrowseQuery = (filters: string[], filtersConfig: any, search: ISearchState) => {
  let queryList: string[] = [];
  let active = false;
  let inactive = false;
  let name: string|null = null;

  if (search?.key.length > 0 && search?.value.length > 0 && !!filtersConfig?.searchIndexes && !!filtersConfig?.searchSettings) {
    let foundKey = false;
    for (let i = 0; i < filtersConfig.searchIndexes.length; i++) {
      if (filtersConfig.searchIndexes[i].value === search.key) {
        foundKey = true;
        break;
      }
    }

    if (foundKey) {
      const setting = filtersConfig.searchSettings[search.key];
      queryList.push(search.key + '=="' + search.value + '"');
    }
  }

  if (filters?.length > 0 && filtersConfig?.filters.length > 0) {
    filters.forEach((filter) => {
      if (filter == 'active.Yes') {
        active = true;
      } else if (filter == 'active.No') {
        inactive = true;
      }
    });
  }

  if (active) {
    if (!inactive) {
      queryList.push('active=true');
    }
  } else if (inactive) {
    queryList.push('active=false');
  }

  return queryList.join(' and ');
}
