import { IPagination } from './IPagination';
import { ISort } from './ISort';

export interface IListResponse<T> {
  content: T;
  pageable: IPagination;
  totalPages: number;
  totalRecords: number;
  last: boolean;
  size: number;
  number: number;
  sort: ISort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}
