import { IDetailPaneProperties } from '../';

export interface IItemRecordDetail extends IDetailPaneProperties {
  selectedItem?: any;
  onRowClick?: any;
}
