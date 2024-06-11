import { IDetailPane } from '../panes/IDetailPane';
import { IItemRecordDetail } from './IItemRecordDetail';

export interface IItemRecordDetailPane extends IDetailPane {
  itemRecordDetail?: IItemRecordDetail;
}
