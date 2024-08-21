import { IPagination } from './IPagination';
import { ISort } from './ISort';

/**
 * Provide properties for a detail pane.
 *
 * workflows: A list of Item Records.
 * totalRecords: The total Item Records available in the entire system and not just a size of the 'workflows' list.
 * totalPages: The total pages used to represent all Item Records in the entire system.
 */
export interface IListResponse<T> {
  workflows: T;
  totalRecords: number;
  totalPages?: any;
}
