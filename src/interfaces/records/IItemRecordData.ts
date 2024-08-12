import { IItemRecordControl, IPane } from '../';

/**
 * Provide properties managed by the Item Record pane.
 *
 * itemRecordControl: The Item Record control data.
 */
export interface IItemRecordData extends IPane {
  itemRecordControl?: IItemRecordControl;
}
