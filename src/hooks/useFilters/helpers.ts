import { FilterGroupsConfig, FilterGroupsState } from '@folio/stripes/components';
import { DEFAULT_FILTERS } from '../../constants';

export const getFilters = (appliedFilters: FilterGroupsState) => {
  return Object.keys(appliedFilters).filter(filterKey => appliedFilters[filterKey] === true);
};
