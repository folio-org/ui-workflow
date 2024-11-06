import { ISearchState } from '..';

/**
 * Provide properties for a list request packet.
 *
 * @param filters A list of all active filters.
 * @param filtersConfig Filter configuration details.
 * @param search The active search options.
 * @param limit The requested result limit.
 * @param offset The requested result offset.
 */
export interface IListRequest {
  filters?: string[];
  filtersConfig?: any;
  search?: ISearchState;
  limit?: number;
  offset?: number;
}
