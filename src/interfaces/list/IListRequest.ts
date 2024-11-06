import { ISearchState } from '..';

/**
 * Provide properties for a list request packet.
 *
 * filters: A list of all active filters.
 * filtersConfig: Filter configuration details.
 * search: The active search options.
 * limit: The requested result limit.
 * offset: The requested result offset.
 */
export interface IListRequest {
  filters?: string[];
  filtersConfig?: any;
  search?: ISearchState;
  limit?: number;
  offset?: number;
}
