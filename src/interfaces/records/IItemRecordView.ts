import { IItemRecordControl, IView } from '../';

/**
 * Provide properties for displaying an Item Record.
 *
 * itemRecordControl: The Item Record control data.
 * stripes: The stripes use data.
 */
export interface IItemRecordView extends IView {
  itemRecordControl?: IItemRecordControl
  stripes?: any;
}
