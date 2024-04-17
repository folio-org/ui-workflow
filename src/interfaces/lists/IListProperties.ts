import { IItemRecordDetail } from "./IItemRecordDetail";

export interface IListProperties {
  view?: any;
  data?: any;
  isLoading?: boolean;
  limit?: number;
  offset?: number;
  readFilters?: string[];
  detailPaneSelect?: IItemRecordDetail;
}
