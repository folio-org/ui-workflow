import { IItemRecordControl } from '..';

/**
 * Provide properties for displaying an Item Record.
 *
 * children: Used to pass child elements.
 * control: The Item Record control data.
 * id: The ID to use for the pane.
 * list: The list hook properties like data, error, isLoading, and refetch.
 * stripes: The stripes use data.
 * view: The active view being used from the VIEW constant.
 * workflow: The useWorkflow instance.
 */
export interface IItemRecordPane {
  children?: any;
  control?: IItemRecordControl;
  id?: any;
  list?: any;
  stripes?: any;
  view?: any;
  workflow?: any;
}
