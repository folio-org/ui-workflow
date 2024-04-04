import { IFilterConfig } from '../../interfaces';
import { t } from '../../utilities';

export const useFilterConfigBrowse = (): IFilterConfig => {
  const filters: any[] = [
    { label: t('filter.label-active'), name: 'active', cql: 'active', values: [ 'Yes', 'No' ], restrictWhenAllSelected: true },
  ];

  const searchIndexes: any[] = [
    { label: 'Name', value: 'name', placeholder: 'Search by Name' },
    { label: 'ID', value: 'id', placeholder: 'Search by ID' },
    { label: 'Description', value: 'description', placeholder: 'Search by Description' },
    { label: 'Version Tag', value: 'versionTag', placeholder: 'Search by Version Tag' },
  ];

  const searchSettings = {
    name: {
      exactPhrase: 'name=="%{query.query}"',
      containsAll: 'name all "%{query.query}"',
      startsWith: 'name all "%{query.query}*"',
      containsAny: 'name any "%{query.query}"',
    },
    description: {
      exactPhrase: 'description=="%{query.query}"',
      containsAll: 'description all "%{query.query}"',
      startsWith: 'description all "%{query.query}*"',
      containsAny: 'description any "%{query.query}"',
    },
    versionTag: {
      exactPhrase: 'versionTag=="%{query.query}"',
      containsAll: 'versionTag all "%{query.query}"',
      startsWith: 'versionTag all "%{query.query}*"',
      containsAny: 'versionTag any "%{query.query}"',
    },
  };

  return {
    filters,
    searchIndexes,
    searchSettings,
  };
};
