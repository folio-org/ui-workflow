import { ISearchState } from '../';

export interface IListRequest {
  filters?: string[];
  filtersConfig?: any;
  search?: ISearchState;
  limit?: number;
  offset?: number;
}
