import { IPagination } from './IPagination';
import { ISort } from './ISort';

export interface IListResponse<T> {
  workflows: T;
  totalRecords: number;
}
