import { IItemRecordControl, IView } from '../';

/**
 * Provide properties for displaying an Item Record.
 *
 * control: The Item Record control data.
 * nodeStack: Hook for managing a Node stack.
 * stripes: The stripes use data.
 */
export interface IItemRecordPane extends IView {
  control?: IItemRecordControl;
  nodeStack?: any;
  stripes?: any;
}
