import { IItemRecordDetail, IView } from '../';

export interface IItemRecordView extends IView {
  itemRecordDetail?: IItemRecordDetail
  stripes?: any;
}
