import { IDetailPaneProperties } from '../panes/IDetailPaneProperties';

export interface IItemRecordDetail extends IDetailPaneProperties {
  selectedItem?: any;
  onRowClick?: any;
}
