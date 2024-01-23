import { useLists } from '../useLists';
import { t } from '../../utilities';

export const useFilterConfigBrowse = () => {
  const { listsData = [], isLoading }: any = useLists();

  const filterConfig: any[] = [
    {
      label: t('filter.label-active'),
      name: 'active',
      cql: 'active',
      values: [ 'Yes', 'No' ]
    }
  ];

  return {
    filterConfig,
    isLoadingConfigData: isLoading
  };
};
