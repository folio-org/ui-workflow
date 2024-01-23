import { useLists } from '../useLists';
import { t } from '../../utilities';

export const useFilterConfigCreate = () => {
  const { listsData = [], isLoading }: any = useLists();

  const filterConfig: any[] = [
  ];

  return {
    filterConfig,
    isLoadingConfigData: isLoading
  };
};
