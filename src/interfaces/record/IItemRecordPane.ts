import { IItemRecordControl, IView } from '../';

/**
 * Provide properties for displaying an Item Record.
 *
 * children: Used to pass child elements.
 * control: The Item Record control data.
 * list: The list hook properties like data, error, isLoading, and refetch.
 * stripes: The stripes use data.
 */
export interface IItemRecordPane extends IView {
  children?: any;
  control?: IItemRecordControl;
  list?: any;
  stripes?: any;
}
