import { ISort } from './ISort';

/**
 * Provide properties for a list pagination.
 *
 * @param sort The sorting data.
 * @param offset The pagination offset.
 * @param pageNumber The current page.
 * @param pageSize The number of rows for the page.
 * @param paged TRUE if paging.
 * @param unpaged TRUE if not paged.
 */
export interface IPagination {
  sort: ISort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
