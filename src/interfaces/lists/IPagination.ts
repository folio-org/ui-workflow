import { ISort } from './ISort'

/**
 * Provide properties for a list pagination.
 *
 * sort: The sorting data.
 * offset: The pagination offset.
 * pageNumber: The current page.
 * pageSize: The number of rows for the page.
 * paged: TRUE if paging.
 * unpaged: TRUE if not paged.
 */
export interface IPagination {
  sort: ISort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}
