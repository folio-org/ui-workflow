import { IDetailPane, IItemRecordControl } from '../';

/**
 * Provide properties managed by the Item Record pane.
 *
 * itemRecordControl: The Item Record control data.
 */
export interface IItemRecordData extends IDetailPane {
  itemRecordControl?: IItemRecordControl;
}
