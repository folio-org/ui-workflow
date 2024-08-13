import { IItemRecordControl, IView } from '../';

/**
 * Provide properties for displaying an Item Record.
 *
 * control: The Item Record control data.
 * stripes: The stripes use data.
 */
export interface IItemRecordPane extends IView {
  control?: IItemRecordControl;
  stripes?: any;
}
